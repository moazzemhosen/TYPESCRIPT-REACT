import React, { useState } from 'react'
interface ITodosInput{
    onClick:(value:string)=>void
}

const TodoInput = ({ onClick}:ITodosInput) => {
    const [text, setText] = useState("");

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    };

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        onClick(text)
    };
  return (
      <div>
          <input type={"text" }value={text} onChange={changeHandler} />
          <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput