import { useInsertionEffect, useState } from "react"
import User from '../User/User'

function Users() {
    const [num, setNum] = useState(0)
    const [users, setUsers] = useState([])
    const [user, setUser] = useState()

    useInsertionEffect(() => {
        const GetUsers = () => {
            const result = fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
        }
        GetUsers()
    }, [])

    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num + 1)
            }}>123</button>


            <div className="users">
                {users && users.map(user => {
                    return <User {...user}/>
                })}
            </div>
        </>
    )
}

export default Users;