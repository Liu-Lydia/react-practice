function TodoItem(props) {
  const { item, handleCompleted, handleDelete, handleEditedToggle } = props
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            handleCompleted(item.id)
          }}
        />
        <span
          onDoubleClick={() => {
            handleEditedToggle(item.id)
          }}
        >
          {item.completed ? <del>{item.text}</del> : item.text}
        </span>
        <button
          onClick={() => {
            handleDelete(item.id)
          }}
        >
          刪除
        </button>
        <button
          onClick={() => {
            handleEditedToggle(item.id)
          }}
        >
          編輯
        </button>
      </li>
    </>
  )
}

export default TodoItem
