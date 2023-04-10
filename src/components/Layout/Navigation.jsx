import React from "react";
import { Button } from "antd";
import { Route, Routes, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-one">Page One</Link>
          </li>
          <li>
            <Link to="/page-two">Page Two</Link>
          </li>
          <li>
            <Link to="/page-three">Page Three</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
