import { createStore } from "redux";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Take out the trash.",
      highPriority: false,
      isCompleted: true,
    },
    {
      id: 2,
      title: "Read a book.",
      highPriority: true,
      isCompleted: false,
    },
    {
      id: 3,
      title: "Plant a tree.",
      highPriority: false,
      isCompleted: false,
    },
  ],
};

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(todosReducer);

export default store;

interface TodoType {
  id: number;
  title: string;
  highPriority: boolean;
  isCompleted: boolean;
}

export type { TodoType };
export type RootState = ReturnType<typeof todosReducer>;
