
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from './Todo.module.css'

function Todo(props) {
    const { todo, removeTodoFromArray, markIsChecked, increaseCompleatedTodosCounter, decreaseCompleatedTodosCounter } = props
    return (
        <div className={`${styles.todo} ${todo.isCompleated ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.toodIcon} />
            <div className={styles.todoText}>
                {todo.text}
            </div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => { removeTodoFromArray(todo.id)
                                                                            if (todo.isCompleated){
                                                                                decreaseCompleatedTodosCounter()
                                                                            }
                                                                            }} />
            <FaCheck
                className={styles.checkIcon}
                onClick={() => {
                    markIsChecked(todo.id);
                    if (todo.isCompleated) {
                        decreaseCompleatedTodosCounter()
                    }
                    else {
                        increaseCompleatedTodosCounter()
                    }
                }}
            />
        </div>
    )
}



export default Todo