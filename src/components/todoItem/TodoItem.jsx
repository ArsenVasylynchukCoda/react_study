import { useState } from "react"

function TodoItem ({todo, removeTodo, editTodo}) {
    const [inputText, setInputText] = useState(todo.value)
    const [isEdit, setIsEdit] = useState(false)

    const changeInputText = (e) => setInputText(e.target.value)

    const editIsClicked = () => {
        setIsEdit(true)
    }

    const saveIsClicked = () => {
        setIsEdit(false)
        editTodo(todo.id, inputText)
    }

    const editOnClick = () => {
        !isEdit ? (
            editIsClicked()
        ) : (
            saveIsClicked()
        )
    } 

    return (
        <li key={todo.id}>
            {
                !isEdit ? (
                    <span>{todo.value}</span>
                ) : (
                    <input type="text" value={inputText} onChange={changeInputText} />
                )
            }
            <div>
                <button onClick={() => removeTodo(todo.id)}>delete</button>
                <button onClick={editOnClick}>edit</button>
            </div>
        </li>
    )
}

export default TodoItem