
import Todo from "./Todo"
import styles from './TodoList.module.css'


function TodoList(props) {
    const { todoArray, removeTodoFromArray, markIsChecked } = props


    return (
        <div className={styles.todoListContainer}>
            {!todoArray.length && <h2>Todo list is empty</h2>}
            {todoArray.map((todo) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodoFromArray={removeTodoFromArray}
                    markIsChecked={markIsChecked}
                />
            )}
           
        </div>
    )



}

export default TodoList