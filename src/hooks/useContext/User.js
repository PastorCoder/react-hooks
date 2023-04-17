import React, { useContext } from "react";
import "../../hooks/style.css";
import { AppContext } from "./UseContextExample";

function User() {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>
        User: <span className="new-text">{username}</span>
      </h1>
    </div>
  );
}

export default User;
