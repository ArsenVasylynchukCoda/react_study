import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './UsersPage.css'

function UsersPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(setUsers)
    }, [])

    return (
        <div className="users">
            <div className="users__block">
                {users && users.map(user => {
                    return <div className="users__item">
                        <span className="users__item-name">{user.name}</span>
                        <Link className="users__item-detail" to={`${user.id}`}>Detail</Link>
                    </div>
                })}
            </div>
            <Outlet />
        </div>
    )
}

export default UsersPage