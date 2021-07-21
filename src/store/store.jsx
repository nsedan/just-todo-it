import { createStore } from "redux";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_PRIORITY":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            highPriority: !todo.highPriority,
          };
        }
        return todo;
      });
    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const store = createStore(todosReducer);

export default store;
