import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [msgArr] = useState([
    { id: "1", title: "message1" },
    { id: "2", title: "message2" },
    { id: "3", title: "message3" },
  ]);

  const navigate = useNavigate(); // hook

  function goBack() {
    navigate(-1);
  }
  function goForward() {
    navigate(1);
  }
  function goHome() {
    navigate("/about", { replace: true });
  }
  // function pushShow(msgObj) {
  //   return function () {
  //     navigate(`/home/message/detail/${msgObj.id}/${msgObj.title}`);
  //   };
  // }
  // function replaceShow(msgObj) {
  //   return function () {
  //     navigate(`/home/message/detail/${msgObj.id}/${msgObj.title}`, {
  //       replace: true,
  //     });
  //   };
  // }

  return (
    <div>
      <ul>
        {msgArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* ---------------------------------------------------------------- */}
              {/* ---------------------------------------------------------------- */}
              {/* params */}
              <Link
                replace={false}
                to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}
              >
                {msgObj.title}
              </Link>

              {/* searchParams */}
              {/* <Link
                to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
              >
                {msgObj.title}
              </Link> */}

              {/* stateParams */}
              {/* <Link
                to="/home/message/detail"
                state={{ id: msgObj.id, title: msgObj.title }}
              >
                {msgObj.title}
              </Link> */}
            </li>
          );
        })}
      </ul>
      <hr />
      {/* <Detail /> */}
      <Outlet />
      <div style={{ textAlign: "center" }}>
        <button onClick={goHome}>Home</button>
        <button onClick={goBack}>Back</button>
        <button onClick={goForward}>Forward</button>
      </div>
    </div>
  );
}
