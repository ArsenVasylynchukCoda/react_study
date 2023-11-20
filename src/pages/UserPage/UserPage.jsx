import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Post from "../../components/Post/Post"
import './UserPage.css'
import { Link, useNavigate } from "react-router-dom"

function UserPage() {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(setUser);
    }, [id])

    console.log(user)

    return (
        <div className="user">
            <div className="user__navigation">
                <button className="user__navigation-item" onClick={() => navigate(-1)}>Back</button>
            </div>
            {user ? (
                <>
                    <div className="information">
                        <p className="information__text">Name : <span></span> {user.name}</p>
                        <p className="information__text">User name : <span>{user.username}</span></p>
                        <p className="information__text">E-mail : <span>{user.email}</span></p>
                        <p className="information__text">Phone : <span>{user.phone}</span></p>
                        <h2 className="information__title">Posts & Comments</h2>
                        <Post userId={user.id} />
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default UserPage