// @flow
import type { Todo, Action } from "../constants/types.js";

export default (state: Array<Todo> = [], action: Action): Array<Todo> => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};
