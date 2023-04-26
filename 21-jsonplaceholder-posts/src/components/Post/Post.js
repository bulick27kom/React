import './Post.css'


function Post(props) {
    const { post } = props
    return (
        <div className="card">
            <h3>{post.id}</h3>
            <h4>{post.userId}</h4>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post