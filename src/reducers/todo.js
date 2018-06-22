// @flow
import type { Todo, TodoAction } from "../constants/types.js";

export default (state: Array<Todo> = [], action: TodoAction): Array<Todo> => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      const updatedState = state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return updatedState;
    default:
      return state;
  }
};
