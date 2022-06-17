import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  /* componentDidAmount */
  useEffect(() => {
    setTimeout(() => {
      navigate(`/home/message`);
    }, 3000);
  });

  return (
    <div>
      <h4>Here are today's news</h4>
      <ul>
        <li>news1</li>
        <li>news2</li>
        <li>news3</li>
      </ul>
    </div>
  );
}
