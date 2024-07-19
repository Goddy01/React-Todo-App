import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

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
  return(
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App