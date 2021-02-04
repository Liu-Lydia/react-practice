import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'

function TodoList(props) {
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEditedToggle,
    handleEditedSave,
  } = props

  return (
    <>
      <ul>
        {todos.map((item, index) => {
          if (item.edited) {
            return (
              <TodoItemEditForm
                key={item.id}
                item={item}
                handleEditedSave={handleEditedSave}
              />
            )
          }

          return (
            <TodoItem
              key={item.id}
              item={item}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleEditedToggle={handleEditedToggle}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
