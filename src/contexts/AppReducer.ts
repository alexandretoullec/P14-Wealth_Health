import { mockedEmployees } from "../data/data.js";

export const initialState = {
  employees: mockedEmployees,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      let newEmployee = [...state.employees, action.payload];
      return {
        ...state,
        employee: newEmployee,
      };
    case "SET_EMPLOYEES":
      return {
        ...state,
        newEmployee: action.payload,
      };
    default:
      return state;
  }
};
