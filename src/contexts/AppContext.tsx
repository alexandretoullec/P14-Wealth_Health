import {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
/* reducer */
import { AppReducer, initialState } from "./AppReducer";

// Create a new context for the application state and dispatch function
const AppContext = createContext({} as any);

// Create a wrapper component that will provide the context to its children
export function AppWrapper({ children }: { children: ReactNode }) {
  // Use the useReducer hook to manage state using the AppReducer and initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Memoize the context value to update only when the state or dispatch change
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // Load stored employees from local storage and set the state with them if they exist
  useEffect(() => {
    // Check if the code is running on the client-side (in the browser)
    if (typeof window !== "undefined") {
      const storedEmployees = localStorage.getItem("employees");
      if (storedEmployees) {
        try {
          // Parse the stored employees and dispatch an action to set them in the state
          const employees = JSON.parse(storedEmployees);
          dispatch({
            type: "SET_EMPLOYEES",
            payload: employees,
          });
        } catch (error) {
          console.log("Error parsing stored employees:", error);
        }
      }
    }
  }, []);

  // Store the employees in local storage when the state changes
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("employees", JSON.stringify(state.employees));
    }
  }, [state, state.employees]);

  // Provide the context value to the wrapped components
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
export function useAppContext() {
  // Use the useContext hook to access the app context in functional components
  return useContext(AppContext);
}
