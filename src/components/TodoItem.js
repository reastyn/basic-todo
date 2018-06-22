// @flow
import React from "react";

type Props = {
  text: string,
  completed: boolean,
  onClick: () => void
};

export default (props: Props) => (
  <div className="card">
    <div className="card-content" onClick={props.onClick}>
      <div className="content">
        <label className="checkbox is-size-5">
          <input type="checkbox" checked={props.completed} />
          {props.text}
        </label>
      </div>
    </div>
  </div>
);
