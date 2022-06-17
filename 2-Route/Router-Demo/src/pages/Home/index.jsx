import React from "react";
import { Outlet } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <br />
        {/* <News /> or <Message /> */}
        <Outlet />
      </div>
    </div>
  );
}
