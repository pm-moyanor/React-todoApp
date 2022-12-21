import { useState } from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  handleRemoveClick,
  handleEditClick,

}) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li id={todo.id} key={todo.id}>
            {
              <Todo
                handleEditClick={handleEditClick}
                handleRemoveClick={handleRemoveClick}
                todo={todo}
             
              />
            }
          </li>
        );
      })}
    </ul>
  );

  // return(

  // )
}
