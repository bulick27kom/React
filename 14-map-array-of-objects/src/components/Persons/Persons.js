import persons from '../../data/persons';
import Person from '../Person/Person';
import './Persons.css'

function Persons() {
    return (
        <div className='cards'>
            {
                persons.map((person) => {
                    return <Person key={person.id} {...person} />
                })
            }
        </div>
    )
}

export default Persons