import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  let {todos, todoValue, setTodoValue} = props
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex} {...props} todoIndex={todoIndex}>
                 <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
