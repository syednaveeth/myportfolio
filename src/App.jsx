import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
