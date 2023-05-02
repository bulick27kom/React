import { useState } from 'react'
import styles from './TodoForm.module.css'

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
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default TodoForm