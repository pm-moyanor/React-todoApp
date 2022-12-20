import { useState } from "react";

export default function AddTodo({ onAddTodo}) {
const [todo,setTodo] = useState(null)

function handleAddClick(){
    onAddTodo(todo)
    console.log(todo)
   
}

  return (
    <div>
      <input
        type="text"
        placeholder="new task"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      ></input>
      <button onClick={handleAddClick}>add</button>
    </div>
  );
}
