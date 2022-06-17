import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function Detail() {
  const [detailArr] = useState([
    { id: "1", content: "this is test message1" },
    { id: "2", content: "this is test message2" },
    { id: "3", content: "this is test message3" },
  ]);

  /* params */
  const params = useParams(); //hook

  /* searchParams */
  // const [search, setSearch] = useSearchParams(); //hook
  // const params = {
  //   id: search.get("id"),
  //   title: search.get("title"),
  // };

  /* stateParams */
  // const stateObj = useLocation().state || {}; //hook
  // const params = {
  //   id: stateObj.id,
  //   title: stateObj.title,
  // };

  const content =
    detailArr.find((detailObj) => {
      return detailObj.id === params.id;
    }) || {};

  return (
    <ul>
      <li>Id:{params.id}</li>
      <li>Title:{params.title}</li>
      <li>Content:{content.content}</li>
    </ul>
  );
}
