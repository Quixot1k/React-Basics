import "./index.css";

import React from "react";

export default function TodoItem(props) {
  const { token, content, status } = props;
  let displayContent;
  if (content.length > 40) {
    displayContent = content.slice(0, 40) + "...";
  } else {
    displayContent = content;
  }

  return (
    <li className="todo-item">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => {
            props.checkItem(token, e.target.checked);
          }}
        />
      </div>
      <span
        className="content"
        style={{
          textDecoration: status ? "line-through" : "none",
          color: status ? "#777" : "#000",
        }}
        onClick={() => props.showPop(token)}
      >
        {displayContent}
      </span>
      <div className="btn-group">
        <button
          className="item__btn btn-delete"
          onClick={() => {
            props.deleteItem(token);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
