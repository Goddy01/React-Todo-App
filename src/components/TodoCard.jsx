import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default function TodoCard() {
  return (
    <div>
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </div>
  )
}
