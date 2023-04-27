import './Posts.css'
import { useEffect, useState } from 'react'
import Post from "../Post/Post"


function Posts() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => { setPosts(data) })
            .catch((error) => { setError(error.message) })
            .finally(() => setIsLoading(false))
    }, [])

    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            <div className="cards">
                {
                    isLoading
                        ? <h1>Loading...</h1>
                        : posts && posts.map((post) => {
                            return <Post key={post.id} {...post} />
                        })
                }
            </div>
        </>
    )
}

export default Posts