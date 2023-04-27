import './Post.css'


function Post(props) {
    const {id, title, userId, body} = props
    return (
        <div className="card">
            <h3>{id}</h3>
            <h4>{userId}</h4>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default Post