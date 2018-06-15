// @flow
import React, { Component } from 'react';
import './App.scss';

type Props = {

}

class App extends Component<Props> {
  render() {
    return (
      <div className="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter task-list">
            <div class="box">
              <h2 class="title">My tasks</h2>
              <hr />
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input class="input" type="text" placeholder="New task" />
                </div>
                <div class="control">
                  <a class="button is-primary">
                    Add task
                        </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">

                  <label class="checkbox is-size-5">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
