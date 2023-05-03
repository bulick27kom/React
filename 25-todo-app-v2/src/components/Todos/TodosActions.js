import { RiRestartLine, RiDeleteBin2Fill } from "react-icons/ri"
import Button from "../UI/Button"
import styles from "./TodosActions.modules.css"

function TodosActions(props) {
    const { completedTodosCount, resetAllCompleatedMarks, deleteCompleatedTodos } = props
    return (
        <div className={styles.TodosActionsContainer}>
            <Button
                key="reset"
                onClick={resetAllCompleatedMarks}
                title="Reset todos"
            >
                <RiRestartLine />
            </Button>
            <Button
                key="delete"
                onClick={deleteCompleatedTodos}
                disabled={!completedTodosCount}
                title="Clear completed todos"
            >
                <RiDeleteBin2Fill />
            </Button>
        </div>
    )
}

export default TodosActions