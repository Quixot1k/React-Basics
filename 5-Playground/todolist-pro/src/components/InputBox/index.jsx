import React, { Fragment, useRef } from "react";
import "./index.css";

export default function InputBox(props) {
  const { isInputBox, addItem } = props;
  const InputBox = useRef();
  return (
    <Fragment>
      {isInputBox ? (
        <div className="inputbox">
          <input
            type="text"
            placeholder="Add to your List"
            className="input__entry"
            ref={InputBox}
          />

          <button
            className="input__btn"
            onClick={() => {
              addItem(InputBox);
            }}
          >
            Confirm
          </button>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
