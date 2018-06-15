// @flow
import React from "react";
import TodoInput from "./containers/TodoInput";
import "./App.scss";

const App = () => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter task-list">
      <div className="box">
        <h2 className="title">My tasks</h2>
        <hr />
        <TodoInput />
      </div>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <label className="checkbox is-size-5">
              <input type="checkbox" />
              Remember me
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
