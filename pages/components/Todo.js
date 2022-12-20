import { useState } from "react";

export default function Todo({handleEditClick,handleRemoveClick,todo}){

    return (
        <div>
        <li>{todo}</li>
        <button onClick={handleEditClick}>edit</button>
        <button onClick={handleRemoveClick}>remove</button>
        </div>
    )
}