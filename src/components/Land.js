import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Land = () => {
  const [todos, setTodos] = useState([]);

  const adaugTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const stergTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const facutTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.facut = !todo.facut;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="land">
        <div className="todolist">
          <Form adaugTodo={adaugTodo} />
          {todos.map((todo) => {
            return (
              <List
                stergTodo={stergTodo}
                facutTodo={facutTodo}
                todo={todo}
                key={todo.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Land;
