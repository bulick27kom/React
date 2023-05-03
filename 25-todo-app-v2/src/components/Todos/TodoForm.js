import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm(props) {
    const [inputText, setInputText] = useState('')
    const { addTodoToArray } = props

    function handleFormSubmit(event) {
        event.preventDefault()
        addTodoToArray(inputText)
        setInputText("")
    }

    return (
        <div className={styles.todoFormContainer} >
            <form
                onSubmit={handleFormSubmit}
            >
                <input
                    type="text" placeholder='Enter new todo'
                    value={inputText}
                    onChange={(e) => { setInputText(e.target.value) }}
                >
                </input>
                <Button
                    type="submit"
                    title="Submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default TodoForm