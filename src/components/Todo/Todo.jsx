import { useState } from "react"
import { v4 as uuid } from 'uuid'
import TodoItem from '../todoItem/TodoItem'
import './Todo.css'

function Todo() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

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

    const removeTodo = (id) => {
        const restTodos = todos.filter(todo => todo.id !== id)

        setTodos(restTodos)
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
            <div className="todos__form">
                <h2 className="todos__title">Add Todo</h2>
                <form>
                    <input type="text" value={inputValue} onChange={inputAddValue} />
                    <button onClick={addTodo} className="todos__form-add">Add</button>
                </form>
            </div>
            <div className="todos__block">
                <h2 className="todos__title">Todos</h2>
                {
                    todos.length ? (
                        <ul className="todos__list">
                            {todos.map(todo => {
                                return <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
                            })}
                        </ul>
                    ) : null
                }

            </div>
        </div>
    )
}

export default Todo