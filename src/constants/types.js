// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type Todo = {
  +text: string,
  +completed: boolean
};

export type TodoState = {
  +todos: Array<Todo>
};

export type TodoAction = { type: "ADD_TODO", +text: string };

export type ReduxInitAction = { type: "@@INIT" };

export type State = TodoState;

export type Action = ReduxInitAction | TodoAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
