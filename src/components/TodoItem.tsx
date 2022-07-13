import React from 'react'
import { ItodoItems } from './Todo'

const TodoItem = ({id,title,status}:ItodoItems) => {
  return (
      <div>
          <h3>{`${id}_${title}_${status}`}</h3>
    </div>
  )
}

export default TodoItem