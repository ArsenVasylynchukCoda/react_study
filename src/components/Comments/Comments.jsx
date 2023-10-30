import { useEffect, useState } from "react";

function Comments({ postId }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [])

    return (
        <div className="comments__under">
            <h4>Comments Under Posts</h4>
            {
                comments && comments.map(comment => {
                    return (
                        <>
                    
                            <br />
                            <h4>Comment</h4>
                            <p>name: {comment.name}</p>
                            <p>email: {comment.email}</p>
                            <span>Text:</span>
                            <p>{comment.body}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Comments