
import Todo from "./Todo"
import styles from './TodoList.module.css'


function TodoList(props) {
    const { todoArray, removeTodoFromArray, markIsChecked, completedTodosCount } = props


    return (
        <div className={styles.todoListContainer}>
            {!todoArray.length && <h2>Todo list is empty</h2>}
            {todoArray.map((todo) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodoFromArray={removeTodoFromArray}
                    markIsChecked={markIsChecked}
                    completedTodosCount={completedTodosCount}
                />
            )}
            {completedTodosCount > 0 && (completedTodosCount === 1 ? <h2>You have compleated 1 todo!</h2> : <h2>You have {completedTodosCount} todos! </h2>)}
        </div>
    )



}

export default TodoList