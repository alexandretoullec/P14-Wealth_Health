import { mockedEmployees } from "../data/data.js";

export const initialState = {
  employees: mockedEmployees,
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      // Add new employee to the list of employees
      let newEmployee = [...state.employees, action.payload];
      // returns the new state of the app, by copying the old state and adding the new employee to the list
      return {
        ...state,
        employees: newEmployee,
      };
    case "SET_EMPLOYEES":
      // Sets the list of employees
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};
