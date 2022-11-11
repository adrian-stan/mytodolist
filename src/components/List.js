import React from "react";
import { GoTrashcan, GoCheck } from "react-icons/go";

const List = (props) => {
  const { todo, stergTodo, facutTodo } = props;
  return (
    <>
      <div className={todo.facut ? "facut" : "onetodo"}>
        <p>{todo.text}</p>
        <div className="buttons">
          <button className="icon" onClick={() => facutTodo(todo.id)}>
            <GoCheck className="icon-check" />
          </button>
          <button className="icon" onClick={() => stergTodo(todo.id)}>
            <GoTrashcan className="icon-trash" />
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
