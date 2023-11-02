import { useState } from "react"
import editIcon from '../../assets/images/edit_icon.png'
import saveIcon from '../../assets/images/save_icon.png'

function TodoItem({ todo, removeTodo, editTodo }) {
    const [isEdit, setIsEdit] = useState(false)
    const [inputText, setInputText] = useState(todo.todoText)

    const toggleEdit = () => {
        setIsEdit(prevValue => !prevValue)
    }

    const handleEditTodo = () => {
        setIsEdit(true)
    }

    const handleSaveTodo = () => {
        setIsEdit(false)
        editTodo(todo.id, inputText)
    }

    const handleCombineTodo = () => {
        isEdit ? handleSaveTodo() : handleEditTodo()
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <li key={todo.id} className='todos__list-item'>
            {
                !isEdit ? (
                    <span className='todos__item-text'>{todo.todoText}</span>
                ) 
                : (
                    <input type="text" value={inputText} onChange={handleChange}/>
                )
            }
            <div className='todos__item-btns'>
                <button className='todos__item-btn todos__item-delete' onClick={() => removeTodo(todo.id)}></button>
                <button className='todos__item-btn todos__item-edit' onClick={() => handleCombineTodo()}>
                    <img src={
                        !isEdit ? editIcon : saveIcon
                    } alt="editIcon" />
                </button>
            </div>
        </li>
    )
}

export default TodoItem