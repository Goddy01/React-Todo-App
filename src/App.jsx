import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return (
            todoIndex !== index
      )
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  return(
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App