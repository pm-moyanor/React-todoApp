import { useState } from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  const [newTodo, setNewTodo] = useState(null);

  function handleRemoveClick(e) {
    //setTodos(todos.filter(t=>t !=))
    console.log("remove clicked");
  }
  function handleEditClick() {
    console.log("edit clicked");
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
            todo={todo}
          />
        );
      })}
    </ul>
  );

  // return(

  // )
}
