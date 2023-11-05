import { useState } from "react"
import { v4 as uuid } from 'uuid'
import TodoItem from '../todoItem/TodoItem'

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

        console.log(todos)
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
                <form>
                    <input type="text" value={inputValue} onChange={inputAddValue} />
                    <button onClick={addTodo}>Add</button>
                </form>
            </div>
            <div className="todos__block">
                {
                    todos.length ? (
                        <ul>
                            { todos.map(todo => {
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