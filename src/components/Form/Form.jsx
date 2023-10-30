import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function Form() {
    const [todos, setTodos] = useState([])
    const [todoInputText, setTodoInputText] = useState('')
    const [editBtnClicked, setEditBtnClicked] = useState(false)
    const getInputText = (e) => { setTodoInputText(e.target.value) }

    const formSubmit = (e) => {
        e.preventDefault()

        const todoObj = {
            todoText: todoInputText,
            id: uuid()
        }

        setTodos([...todos, todoObj])
        setTodoInputText('')
    }

    const removeTodo = (id) => {
        const restTodos = todos.filter(elem => elem.id !== id)
        setTodos(restTodos)
    }

    const editTodo = (e, id) => {
        const parent = e.target.parentElement
        const [span] = parent.getElementsByClassName('todos__item-text')

        if (editBtnClicked) {
            span.setAttribute("contenteditable", true)
            span.focus()
        } else {
            span.setAttribute("contenteditable", false)

            todos.filter(elem => {
                if (elem.id === id) {
                    elem.todoText = span.textContent
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    value={todoInputText}
                    onChange={getInputText}
                />
                <button>add</button>
            </form>
            <h1>Todos</h1>
            <div>
                <div>
                    {
                        todos.length ? (
                            <ul>
                                {todos.map(todo => {
                                    return <li><span className='todos__item-text'>{todo.todoText}</span> <button onClick={() => removeTodo(todo.id)}>delete</button> <button onClick={(e) => {
                                        setEditBtnClicked((prevValue) => !prevValue)
                                        editTodo(e, todo.id)
                                    }}>edit</button></li>
                                })}
                            </ul>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Form