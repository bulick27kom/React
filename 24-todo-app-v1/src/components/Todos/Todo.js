import styles from './Todo.module.css'
import { RiTodoFill } from "react-icons/ri";

function Todo(props) {
    const { textTodo, removeTodoFromArray, index } = props

    return (
        <div className={styles.todo}>
            <div
                className={styles.todoText}
                onDoubleClick={() => { removeTodoFromArray(index) }}
            > {RiTodoFill}
                {textTodo}
            </div>
        </div>
    )
}

export default Todo