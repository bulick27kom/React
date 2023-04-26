import './Posts.css'
import { useEffect, useState } from 'react'
import Post from "../Post/Post"


function Posts() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => setPosts(data))
    }, [])
    console.log('posts :>> ', posts);
    return (
        <>
            <h1>Posts</h1>
            <div className="cards">

                {
                    posts && posts.map((post) => {
                        return <Post key={post.id} post={post} />
                    })
                }
            </div>
        </>
    )
}

export default Posts