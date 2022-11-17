import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "../components/List.css";

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div className="kotak">
      <h3>
        {todos.map((todo) => {
          return <TodoItem key={todos.id} todo={todo} />;
        })}
      </h3>
    </div>
  );
}

export default TodoList;
