import { useState } from "react";
import Todo from "./Todo";

export default function TodoList({ todos ,handleRemoveClick}) {

  const [newTodo, setNewTodo] = useState(null);



  function handleEditClick() {
    console.log("edit clicked");
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li>
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
