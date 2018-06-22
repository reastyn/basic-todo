// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type Todo = {
  +id: number,
  +text: string,
  +completed: boolean
};

export type TodoState = {
  +todos: Array<Todo>
};

export type TodoAction =
  | { type: "ADD_TODO", +id: number, +text: string }
  | { type: "TOGGLE_TODO", +id: number };

export type ReduxInitAction = { type: "@@INIT" };

export type State = TodoState;

export type Action = ReduxInitAction | TodoAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
