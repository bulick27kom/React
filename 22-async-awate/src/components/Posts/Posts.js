import './Posts.css'
import { useEffect, useState } from 'react'
import Post from "../Post/Post"

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        // Можно так, просто создав асинхронную функцию внутри функции и сразу вызвав ее
        async function fetchData() {
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()

        // Или создать самовызывающуюся функцию
        // IFI - самовызывающаяся функция
        // (async function () {
        //     try {
        //         const res = await fetch(API_URL)
        //         const posts = await res.json()
        //         setPosts(posts)
        //     }
        //     catch (error) {
        //         setError(error.message)
        //     }
        //     finally {
        //         setIsLoading(false)
        //     }
        // })()


    }, [])

    // Так нельзя! Всинхронная функция всегда вовращает промис, даже не явно без return
    // useEffect(async () => {
    //     try {
    //         const res = await fetch(API_URL)
    //         const posts = await res.json()
    //         setPosts(posts)
    //     }
    //     catch (error) {
    //         setError(error.message)
    //     }
    //     finally {
    //         setIsLoading(false)
    //     }
    // }, [])

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(responce => responce.json())
    //         .then(data => { setPosts(data) })
    //         .catch((error) => { setError(error.message) })
    //         .finally(() => setIsLoading(false))
    // }, [])


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