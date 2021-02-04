import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'
import { useState } from 'react'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '麥當勞', completed: false },
    { id: 2, text: '肯德基', completed: true },
    { id: 3, text: '摩斯漢堡', completed: false },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index > -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  const handleEditedToggle = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].edited = !newTodos[index].edited

      setTodos(newTodos)
    }
  }

  const handleEditedSave = (id, text) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].text = text

      setTodos(newTodos)

      handleEditedToggle(id)
    }
  }

  const handleAddNew = (text) => {
    const newTodoItem = {
      id: +new Date(),
      text: text,
      completed: false,
    }

    const newTodos = [newTodoItem, ...todos]

    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辦事項</h1>
      <TodoAddForm handleAddNew={handleAddNew} />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedToggle={handleEditedToggle}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}

export default TodoApp
