import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './Form.css'

function Form() {
    const [todos, setTodos] = useState([])
    const [todoInputText, setTodoInputText] = useState('')
    const [editBtnClicked, setEditBtnClicked] = useState(false)
    const [todoEmptyList] = document.getElementsByClassName('todos__list-empty')
    const getInputText = (e) => { setTodoInputText(e.target.value) }

    const formSubmit = (e) => {
        e.preventDefault()

        const todoObj = {
            todoText: todoInputText,
            id: uuid()
        }

        todoEmptyList.classList.remove('active')

        setTodos([...todos, todoObj])
        setTodoInputText('')
    }

    const removeTodo = (id) => {
        const restTodos = todos.filter(elem => elem.id !== id)
        setTodos(restTodos)
        
        if (!restTodos.length) {
            todoEmptyList.classList.add('active')
        }
    }

    const editTodo = (e, id) => {
        const [span] = document.getElementsByClassName('todos__item-text')

        if (editBtnClicked) {
            span.setAttribute("contenteditable", true)
            span.focus()
            e.target.classList.add('active')
        } else {
            span.setAttribute("contenteditable", false)

            todos.filter(elem => {
                if (elem.id === id) {
                    elem.todoText = span.textContent
                }
            })

            e.target.classList.remove('active')
        }
    }

    return (
        <div className='todos__block'>
            <h2 className='todos__title'>Add Todo</h2>
            <div className='todos__form-block'>
                <form onSubmit={formSubmit} className='todos__form'>
                    <input
                        type="text"
                        value={todoInputText}
                        onChange={getInputText}
                    />
                    <button className='todos__add-btn'>add</button>
                </form>
            </div>
            <h2 className='todos__title'>Todos</h2>
            <div className='todos__list'>
                <div className='todos__list-empty active'>Empty List!</div>
                {
                    todos.length ? (
                        <ul>
                            {todos.map(todo => {
                                return <li key={todo.id} className='todos__list-item'><span className='todos__item-text'>{todo.todoText}</span> <div className='todos__item-btns'><button className='todos__item-btn todos__item-delete' onClick={() => removeTodo(todo.id)}></button> <button className='todos__item-btn todos__item-edit' onClick={(e) => {
                                    setEditBtnClicked((prevValue) => !prevValue)
                                    editTodo(e, todo.id)
                                }}></button></div> </li>
                            })}
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Form