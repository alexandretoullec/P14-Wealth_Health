/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { mockedEmployees } from "../data/data.js";

// Initial state for the application
export const initialState = {
  employees: mockedEmployees,
};

// Reducer function for managing state changes
export const AppReducer = (state: any, action: any) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for adding a new employee
    case "ADD_EMPLOYEE":
      // Add the new employee to the list of employees
      // eslint-disable-next-line prefer-const
      let newEmployee = [...state.employees, action.payload];
      // Return the new state by copying the old state and updating the employees list
      return {
        ...state,
        employees: newEmployee,
      };

    // Case for setting the list of employees
    case "SET_EMPLOYEES":
      // Set the list of employees with the provided payload
      return {
        ...state,
        employees: action.payload,
      };

    // Default case to handle unknown action types
    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};
