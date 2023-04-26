import './Posts.css'
import { useEffect, useState } from 'react'
import Post from "../Post/Post"


function Posts() {

    const [posts, setPosts] = useState(null)
    console.log('posts :>> ', posts);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts && posts.map((post) => {
                    <Post key={post.id} post={post} />
                })
            }
        </div>
    )
}

export default Posts