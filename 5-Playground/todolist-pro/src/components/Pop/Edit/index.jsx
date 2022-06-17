import React, { useRef } from "react";
import "./index.css";

import Pop from "..";
export default function Edit(props) {
  const { isPop, currentItem, killPop } = props;

  const editContentRef = useRef();
  const editcheckedRef = useRef();

  const formatNewItem = () => {
    let newItem = {};
    const editContent = editContentRef.current.value.trim();
    const editchecked = editcheckedRef.current.checked;
    const editContentLen = editContent.length;
    if (editContentLen === 0) {
      editContentRef.current.value = currentItem.content;
      return;
    } else if (
      editContent === currentItem.content.trim() &&
      editchecked === currentItem.status
    ) {
      newItem = currentItem;
    } else {
      newItem = {
        token: currentItem.token,
        time: new Date().getTime(),
        content: editContent,
        status: editcheckedRef.current.checked,
      };
    }
    killPop(currentItem.token, newItem);
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();
    return `${y}-${m}-${d} ${h}:${min}`;
  };

  return (
    <Pop isPop={isPop} popTitle="Detail">
      <div className="edit">
        <p>Time: {formatDateTime(currentItem.time)}</p>
        <div className="content-wrapper">
          <label htmlFor="content">Content: </label>
          <textarea
            className="edit-content"
            ref={editContentRef}
            defaultValue={currentItem.content}
          ></textarea>
        </div>
        <p className="edit-checked">
          Status:
          <input
            className="pop-checked"
            type="checkbox"
            defaultChecked={currentItem.status}
            ref={editcheckedRef}
          />
        </p>
      </div>
      <div className="edit-btn-wrapper">
        <button className="edit-btn" onClick={formatNewItem}>
          Comfirm
        </button>
      </div>
    </Pop>
  );
}
