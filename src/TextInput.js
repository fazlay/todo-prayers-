import React from "react";
import "./App.css";

const TextInput = () => {
  return (
    <div>
      <form className="addTodo">
        <input className="text" type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TextInput;
