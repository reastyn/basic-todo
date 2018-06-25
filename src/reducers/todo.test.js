// @flow
import todoReducer from "./todo";
import { addTodo, toggleCompleteTodo } from "../actions/todo.js";

var localStorageMock = (function() {
  var store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

describe("Todo Reducer", () => {
  it("should be able to add todo", () => {
    expect(todoReducer([], addTodo("First todo"))).toEqual([
      {
        text: "First todo",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: "Todo 1",
            completed: false,
            id: 1
          }
        ],
        addTodo("Todo 2")
      )
    ).toEqual([
      {
        text: "Todo 1",
        completed: false,
        id: 1
      },
      {
        text: "Todo 2",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should be able to toggle complete", () => {
    expect(
      todoReducer(
        [
          {
            text: "Test 2",
            completed: false,
            id: 2
          },
          {
            text: "Test 1",
            completed: false,
            id: 1
          }
        ],
        toggleCompleteTodo(2)
      )
    ).toEqual([
      {
        text: "Test 2",
        completed: true,
        id: 2
      },
      {
        text: "Test 1",
        completed: false,
        id: 1
      }
    ]);
  });
});
