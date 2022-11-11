import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const tratezAdauga = (e) => {
    e.preventDefault();
    props.adaugTodo(input);
    setInput("");
  };
  return (
    <>
      <form onSubmit={tratezAdauga}>
        <h1 className="title">To do list</h1>
        <input
          className="input"
          type="text"
          placeholder="Scrie un to do"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <button type="submit" className="btn_add">
          Adaugă
        </button>
      </form>
    </>
  );
};

export default Form;
