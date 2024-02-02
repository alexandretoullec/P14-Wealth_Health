import {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { openDB, DBSchema } from "idb";
import { AppReducer, initialState } from "./AppReducer";

// Define the database schema
interface MyAppDB extends DBSchema {
  employees: {
    key: string;
    value: any;
  };
}

// Create a new context for the application state and dispatch fnction
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext = createContext({} as any);

const DB_NAME = "my-app-db";
const DB_VERSION = 1;

// Create a wrapper component that will provide the context to its children
export function AppWrapper({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    async function initDB() {
      try {
        const db = await openDB<MyAppDB>(DB_NAME, DB_VERSION, {
          upgrade(db) {
            // Create the 'employees' store if it doesn't exist
            if (!db.objectStoreNames.contains("employees")) {
              db.createObjectStore("employees", { keyPath: "id" });
            }
          },
        });

        // Load stored employees from IndexedDB and set the state with them
        const storedEmployees = await db.get("employees", "employees");
        if (storedEmployees) {
          dispatch({
            type: "SET_EMPLOYEES",
            payload: storedEmployees.data,
          });
          console.log("Loaded employees from IndexedDB:", storedEmployees.data);
        } else {
          console.log("No stored employees found in IndexedDB.");
        }
      } catch (error) {
        console.error("Error initializing IndexedDB:", error);
      }
    }

    initDB();
  }, []);

  useEffect(() => {
    async function updateDB() {
      try {
        const db = await openDB<MyAppDB>(DB_NAME, DB_VERSION);

        // Update the 'employees' store with the latest state
        await db.put("employees", { id: "employees", data: state.employees });
        console.log("IndexedDB updated with new employees:", state.employees);
      } catch (error) {
        console.error("Error updating IndexedDB:", error);
      }
    }

    updateDB();
  }, [state.employees]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
/**
 * Custom hook to use the app context
 * @returns the app context
 * @example
 * ```tsx
 * const { state, dispatch } = useAppContext()
 * ```
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  // Use the useContext hook to access the app context in functional components
  return useContext(AppContext);
}
