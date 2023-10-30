import { useEffect, useInsertionEffect, useState } from "react"
import Comments from "../Comments/Comments"

function Post({ userId }) {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    // const test = useState('test')
    // const [test, setTest] =  useState(0)
    // const array = [1, 'string', false]

    // console.log(test[0])

    // const [arrayNum, arrayString, arrayBoolean] = test

    // console.log(arrayNum, arrayString, arrayBoolean)


    const user = {
        name: 'Arsenii',
        surename: 'Vasylynchuk',
        age: 13,
        skills: ['js', 'html', 'css']
    }
    // console.log(user.name, user.age)
    // Деструктерізація обьекта
    // const {skills, name} = user
    // console.log(skills, name)

    useEffect(() => {
        console.log(userId)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    console.log(posts)

    // const getPost = () => {
    //     posts && posts.map(post => {
    //         if (post.userId === userId.userId) {
    //             // console.log(post.userId, post.title)

    //             return (
    //                 post.title
    //             )
    //         }
    //         return post.title
    //     })
    // }

    // console.log(getPost()) 

    return (
        <>
            <div className="posts">
                <h1>Post</h1>
                {
                    posts && posts.map(post => {
                        console.log(post)
                        return (
                            <div className="post__block">
                                <br />
                                <h3>Post</h3>
                                <span>{post.title}</span>
                                <p>{post.body}</p> 
                                <h3>Comments</h3>
                                <Comments postId={post.id}/>
                                <br />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Post