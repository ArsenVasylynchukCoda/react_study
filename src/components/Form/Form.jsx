import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './Form.css'
import TodoItem from '../todoItem/TodoItem'


function Form() {
    const [todos, setTodos] = useState([])
    const [todoInputText, setTodoInputText] = useState('')
    const [editBtnClicked, setEditBtnClicked] = useState(false)
    const [todoEmptyList, setEmptyList] = useState(true)
    const getInputText = (e) => { setTodoInputText(e.target.value) }

    const formSubmit = (e) => {
        e.preventDefault()

        const todoObj = {
            todoText: todoInputText,
            id: uuid()
        }

        if (todoEmptyList) {
            setEmptyList((prevValue) => !prevValue)
        }

        setTodos([...todos, todoObj])
        setTodoInputText('')
    }

    const removeTodo = (id) => {
        const restTodos = todos.filter(elem => elem.id !== id)
        setTodos(restTodos)
        
        if (!restTodos.length) {
            setEmptyList((prevValue) => !prevValue)
        }
    }

    console.log([1,2,3].map(elem => elem+1)) 

    // const editTodo = (id, text) => {
    //     const newTodos = todos.map(elem => {
    //         if (elem.id === id) {
    //             return {
    //                 ...elem, todoText: text
    //             }
    //         } 
    //         return elem
    //     })

    //     setTodos(newTodos)
    // }

    const editTodo = (id, text) => {
        const todoIndex = todos.findIndex(elem => elem.id === id)
        if (todoIndex !== -1) {
            const newTodos = [...todos]
            newTodos[todoIndex] = {
                ...newTodos[todoIndex], todoText: text
            }

            setTodos(newTodos)
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
                <div className={`todos__list-empty ${todoEmptyList ? 'active' : null}`}>Empty List!</div>
                {
                    todos.length ? (
                        <ul>
                            {todos.map(todo => <TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>)}
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Form