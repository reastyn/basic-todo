// @flow
import type { TodoAction } from "../constants/types";

let newId = 0;

export const addTodo = (text: string): TodoAction => {
  return {
    id: newId++,
    type: "ADD_TODO",
    text
  };
};
