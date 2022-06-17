import React from "react";
import routes from "./routes";
import MyNavLink from "./components/MyNavLink";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";

export default function App() {
  const element = useRoutes(routes);
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="pannel-body">{element}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
