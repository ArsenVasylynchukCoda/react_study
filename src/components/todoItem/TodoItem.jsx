import { useState } from "react"
import editIcon from '../../assets/images/edit_icon.png'
import saveIcon from '../../assets/images/save_icon.png'
import deleteIcon from '../../assets/images/delete_icon.png'

function TodoItem ({todo, deleteOnClick, editTodo}) {
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
                <button onClick={() => deleteOnClick(todo.id)} className="todos__item-delete todos__item-btn"><img src={deleteIcon} alt="deleteIcon" /></button>
                <button onClick={editOnClick} className="todos__item-btn todos__item-edit">{
                    !isEdit ? (
                        <img src={editIcon} alt="editIcon" />
                    ) : (
                        <img src={saveIcon} alt="saveIcon" />
                    )
                }</button>
            </div>
        </li>
    )
}

export default TodoItem