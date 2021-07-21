import { createStore } from "redux";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(todosReducer);

export default store;
