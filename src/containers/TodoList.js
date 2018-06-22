// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import type { Dispatch, TodoState, Todo } from "../constants/types";
import { toggleCompleteTodo } from "../actions/todo";
import "../scss/TodoList.scss";

type Props = {
  dispatch: Dispatch,
  todos: Array<Todo>
};

class TodoList extends Component<Props, TodoState> {
  
  toggleTodo = (id:number) => {
    this.props.dispatch(toggleCompleteTodo(id));
  }
  
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} onClick={() => this.toggleTodo(todo.id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
