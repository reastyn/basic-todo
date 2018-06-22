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
        <input type="checkbox" checked={props.completed} readOnly />
        <label className="checkbox is-size-5">
          {props.text}
        </label>
      </div>
    </div>
  </div>
);
