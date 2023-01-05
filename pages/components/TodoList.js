import { useState } from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  handleRemoveClick,
}) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li id={todo.id} key={todo.id}>
            {
              <Todo
                handleRemoveClick={handleRemoveClick}
                todo={todo}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}
