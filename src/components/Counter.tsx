import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = (value: number) => {
        setCount(count+value)
    }
  return (
      <div>
          <Header>
              <div>This is Counter App</div>
          </Header>
          <Header label={`${count}`} />
          <Button label="Add" handleClick={()=>handleClick(1)} />
          <Button label="Reduce" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter