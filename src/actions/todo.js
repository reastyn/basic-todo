// @flow
import type { TodoAction } from "../constants/types";
import { incrementLastId } from "../helpers/localStorage";

export const addTodo = (text: string): TodoAction => {
  return {
    id: incrementLastId(),
    type: "ADD_TODO",
    text
  };
};

export const toggleCompleteTodo = (id: number): TodoAction => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
