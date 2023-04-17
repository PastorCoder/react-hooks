import React, { useState, createContext } from "react";
import "../../hooks/style.css";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContextExampme() {
  const [username, setUsername] = useState("");

  return (
    <div className="use-border">
      <AppContext.Provider value={{ username, setUsername }}>
        <p className="title">useContext</p>
        <Login /> <User />
      </AppContext.Provider>
    </div>
  );
}

export default UseContextExampme;
