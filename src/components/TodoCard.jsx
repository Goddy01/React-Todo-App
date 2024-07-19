import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default function TodoCard(props) {
    const {children, handleDeleteTodo, index} = props;
    return (
        <li className='todoItem'>
            {children}
            <button className='actionButtons'>
                <i className="fa-solid fa-pen"></i>
            </button>
            <button className='actionButtons' onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
    )
}