import React from "react";
import { useRef } from "react";
import { useState } from "react";

interface ITodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {

  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = ''
      // console.log(title);
      // setTitle('')
    }
  }


  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // value={title}
        type="text" id="title"
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        
      />
      <label htmlFor="title" className="active" placeholder="Введите задачу">Введите задачу</label>
    </div>
  )
}