import { Fragment } from "react";
import "./index.css";
export default function Header(props) {
  const { showInputBox } = props;
  return (
    <Fragment>
      <div className="header">
        <h1 className="header__title">Tick List</h1>
        <span className="icon" onClick={showInputBox}>
          &#43;
        </span>
      </div>
    </Fragment>
  );
}
