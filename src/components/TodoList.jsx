import React from 'react'

export default function TodoList() {
  let todos = [
    'Meditation',
    'Eat some fruits',
    'Go to the gym',
    'Startup Stand-up Meeting'
  ]
    return (
        <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <li key={todoIndex} className='todoItem'>
                    {todo}
                    <i class="fa-solid fa-pen"></i>
                </li>
        )
        })}
        </ul>
  )
}
