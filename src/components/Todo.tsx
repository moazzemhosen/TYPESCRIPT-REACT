import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';

export interface ItodoItems{
    id: number;
    title: string;
    status: boolean;
}
const Todo = () => {
    const [todos, setTodos] = useState<ItodoItems[]>([])
    const handleAdd = (title:string) => {
      const  payload = {
            title,status:false,id:todos.length+1
        }
        // setTodos([...todos,payload])
        axios.post("http://localhost:8080/todos", payload).then(getTodos)
        
    }
    // console.log(todos);
    const getTodos = () => {
        axios.get("http://localhost:8080/todos").then(({data}:{data:ItodoItems[]}) => {
                 
        setTodos(data)
    })
}
    useEffect(() => {
        getTodos()
    },[])
    
  return (
      <div>
          <Header label="TodoApp" />
          <TodoInput onClick={handleAdd} />
          {todos.length > 0 && todos.map(item => {
             return <TodoItem key={item.id} {...item} />
          })}
    </div>
  )
}

export default Todo