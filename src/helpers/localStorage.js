// @flow
import type { TodoState } from "../constants/types";
// loads the state from local storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todo-state");
    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: TodoState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todo-state", serializedState);
  } catch (err) {
    console.log("Can't save to local storage.");
  }
};

// increments the last id so that it will be unique even after refresh
export const incrementLastId = () => {
  let lastId = getLastId();
  lastId++;
  localStorage.setItem("todo-id", lastId.toString());
  return lastId;
};

// gets the last id from local storage
export const getLastId = () => {
  const lastId = localStorage.getItem("todo-id");
  if (lastId === null || lastId === undefined) {
    return 0;
  }
  return parseInt(lastId, 0);
};
