import React, { Fragment } from "react";
import "./index.css";

export default function Pop(props) {
  const { isPop, popTitle, children } = props;
  return (
    <Fragment>
      {isPop ? (
        <div className="pop">
          <div className="inner">
            <div className="pop-header">{popTitle}</div>
            <div className="pop-content">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
