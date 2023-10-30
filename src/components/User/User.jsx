import { useState } from "react"
import Post from "../Post/Post"

function User(props) {
    const [isShowDetail, setIsShowDetail] = useState(false)

    return (
        <div className="user">
            <span>{props.name}</span><br />
            <button type="button" onClick={() => {
                setIsShowDetail((prevValue) => !prevValue)
            }}>detail</button>
            {
                isShowDetail && (
                    <div className="information">
                        <span>{props.username}</span> <br />
                        <span>{props.email}</span> <br />
                        <span>{props.phone}</span> <br />
                        <h1>Posts & Comments</h1>
                        <Post userId={props.id} />
                    </div>
                )
            }
            <br />
            <br />
            <br />
        </div>
    )
}

export default User