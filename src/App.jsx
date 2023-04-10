import React from "react";
import "antd/dist/reset.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Page_one from "./components/Page_one";
import Page_two from "./components/Page_two";
import Page_three from "./components/Page_three";
import Navigation from "./components/Layout/Navigation";

const App = () => {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-one" element={<Page_one />} />
        <Route path="/page-two" element={<Page_two />} />
        <Route path="/page-three" element={<Page_three />} />
      </Routes>
    </div>
  );
};

export default App;
