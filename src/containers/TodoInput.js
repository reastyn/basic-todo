// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "../constants/types";
import { addTodo } from "../actions/todo";

type Props = {
  dispatch: Dispatch
};

type State = {
  value: string
};

class TodoInput extends Component<Props, State> {
  state = {
    value: ""
  };

  submitTodo = () => {
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: "" });
  };

  valueChanged = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="New todo"
            value={this.state.value}
            onChange={this.valueChanged}
          />
        </div>
        <div className="control">
          <a className="button is-primary" onClick={this.submitTodo}>
            Add Todo
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(TodoInput);
