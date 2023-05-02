import Todo from "./Todo"
import styles from './TodoList.module.css'

function TodoList(props) {
    const { todoArray, removeTodoFromArray } = props

    return (
        <div className={styles.todoListContainer}>
            {!todoArray.length  && <h2>Todo list is empty</h2>}
            {todoArray.map((todo, index) =>
             <Todo key={index} index={index} textTodo={todo} removeTodoFromArray={removeTodoFromArray} />)}
        </div>
    )



}

export default TodoList