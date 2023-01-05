import { useState } from "react";

export default function Todo({handleRemoveClick,todo,}) {
  const [isDone, setIsDone] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newText, setnewText] = useState("");

  let todoContent;

  if (editMode) {
    todoContent = (
      <>
        <input
          type="text"
          value={newText}
          onChange={(e) => {
            setnewText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            todo.text = newText;
            setEditMode(false);
            setnewText("");
          }}
        >
          save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <h3>{todo.text}</h3>
        {isDone ? <h4>DONE!</h4> : undefined}
        <button onClick={() => setEditMode(true)}>edit</button>
        <button onClick={() => handleRemoveClick(todo.id)}>remove</button>
      </>
    );
  }

  return (
    <>
      <input type="checkbox" onChange={() => setIsDone(!isDone)}></input>
      {todoContent}
    </>
  );
}
