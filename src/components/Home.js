import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const Home = () => {
  let initTodo = [];

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Press On Delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("Press On Add Todo", title + " " + desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      des: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let myStyle = {
    top: "100vh",
    margin: "40px auto",
  };
  return (
    <>
      <div className="container my-3" style={myStyle}>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
    </>
  );
};
