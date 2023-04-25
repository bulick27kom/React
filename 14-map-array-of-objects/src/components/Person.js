function Person(props) {
    const { id, fistName, lastName, email, img } = props.person
    return (
        <div>
            <p>{id}</p>
            <p>{fistName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{img}</p>
        </div>
    )
}

export default Person