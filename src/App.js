// @flow
import React from "react";
import TodoInput from "./containers/TodoInput";
import TodoList from "./containers/TodoList";
import "./App.scss";

const App = () => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter task-list">
      <div className="box">
        <h2 className="title">My tasks</h2>
        <hr />
        <TodoInput />
      </div>
      <TodoList />
    </div>
  </div>
);

export default App;
