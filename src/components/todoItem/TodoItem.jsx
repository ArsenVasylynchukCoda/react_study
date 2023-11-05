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
        <li key={todo.id} className="todos__list-item">
            {
                !isEdit ? (
                    <span className="todos__item-text">{todo.value}</span>
                ) : (
                    <input type="text" value={inputText} onChange={changeInputText} />
                )
            }
            <div className="todos__item-buttons">
                <button onClick={() => removeTodo(todo.id)} className="todos__item-delete todos__item-btn">delete</button>
                <button onClick={editOnClick} className="todos__item-btn todos__item-edit">edit</button>
            </div>
        </li>
    )
}

export default TodoItem