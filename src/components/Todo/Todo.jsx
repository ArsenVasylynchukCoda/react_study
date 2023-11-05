import { useState } from "react"
import { v4 as uuid } from 'uuid'
import TodoItem from '../todoItem/TodoItem'
import './Todo.css'

function Todo() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [deleteIsClicked, setDeleteIsClicked] = useState(false)
    const [deleteTodo, setDeleteTodo] = useState({})

    const inputAddValue = (e) => setInputValue(e.target.value)

    const addTodo = (e) => {
        e.preventDefault()

        const todo = {
            value: inputValue,
            id: uuid()
        }

        setTodos([...todos, todo])
        setInputValue('')
    }

    const inputIsEmpty = (e) => {
        e.preventDefault()
        alert('Add the text')
    }

    const deleteOnClick = (id) => {
        setDeleteIsClicked(true)
        todos.map(todo => {
            if (todo.id === id) {
                setDeleteTodo(todo)
            }
        })
    }

    const deleteOnClickAnswer = () => {
        setDeleteIsClicked(false)
        setDeleteTodo({})
    }

    const removeTodo = (id) => {
        const restTodos = todos.filter(todo => todo.id !== id)

        setTodos(restTodos)

        deleteOnClickAnswer()
    }

    const editTodo = (id, text) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, value: text }
            }
            return todo
        })

        setTodos(newTodos)
    }

    return (
        <div className="todos">
            {
                deleteIsClicked ? (
                    <div className="todos__delete-alert">
                        <div className="todos__delete-block">
                            <h2 className="todos__title todos__delete-alert-title">Todo Delete</h2>
                            <div className="todos__delete-text-block">
                                <p>Are you sure you want to delete this todo:</p>
                                <span>{deleteTodo.value}</span>
                            </div>
                            <div className="todos__delete-buttons">
                                <button className="todos__delete-btn todos__delete-btn-true" onClick={() => removeTodo(deleteTodo.id)}>Yes</button>
                                <button className="todos__delete-btn todos__delete-btn-false" onClick={deleteOnClickAnswer}>No</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className="todos__form">
                <h2 className="todos__title">Add Todo</h2>
                <form>
                    <input type="text" value={inputValue} onChange={inputAddValue} />
                    <button onClick={(e) => {
                        !inputValue ? (
                            inputIsEmpty(e)
                        ) : (
                            addTodo(e)
                        )
                    }} className="todos__form-add">Add</button>
                </form>
            </div>
            <div className="todos__block">
                <h2 className="todos__title">Todos</h2>
                {
                    todos.length ? (
                        <ul className="todos__list">
                            {todos.map(todo => {
                                return <TodoItem todo={todo} deleteOnClick={deleteOnClick} editTodo={editTodo} />
                            })}
                        </ul>
                    ) : (
                        <div className="todos__block-empty">Empty List!</div>
                    )
                }

            </div>
        </div>
    )
}

export default Todo