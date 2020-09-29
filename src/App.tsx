import "./App.css";
import React from "react";
import { Menu } from "./Menu";
import { Conversation } from "./Conversation";

export const App = () => {
  return (
    <div className="App">
      <main>
        <Conversation />
      </main>
      <aside>
        <Menu />
      </aside>
    </div>
  );
};
