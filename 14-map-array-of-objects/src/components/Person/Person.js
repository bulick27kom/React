import './Person.css'

function Person(props) {
    const { fistName, lastName, email, img } = props
    return (
        <div className='card'>
            <img src={img}></img>
            <h3>{fistName} {lastName}</h3>
            <h4>{email}</h4>
        </div>
    )
}

export default Person