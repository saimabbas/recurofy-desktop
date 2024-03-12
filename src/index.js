import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import Course from "./Course";

const root = document.getElementById("root");

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(root).render(<App />);
