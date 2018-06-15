// @flow
import type { TodoAction } from "../constants/types";

export const addTodo = (text: string): TodoAction => {
  return {
    type: "ADD_TODO",
    text
  };
};
