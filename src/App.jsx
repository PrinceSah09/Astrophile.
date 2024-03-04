import { useState } from "react";
import Background from "./componenets/Bacground";
import Foreground from "./componenets/Foreground";
import NavbarSimple from "./componenets/NavbarSimple";
import "./App.css";

function App() {
  return (
    <>
      <NavbarSimple />
      <div className="w-full bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
