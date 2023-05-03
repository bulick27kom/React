import { RiRestartLine, RiDeleteBin2Fill } from "react-icons/ri"
import Button from "../UI/Button"

function TodosActions(props) {
    const { compleatedTodos, ResetAllCompleatedMarks, DeleteCompleatedTodos } = props
    return (
        <>
            <Button
                key="reset"
                onClick={ResetAllCompleatedMarks}
            >
                <RiRestartLine />
            </Button>
            <Button
                key="delete"
                onClick={DeleteCompleatedTodos}
                disabled={!compleatedTodos}
            >
                <RiDeleteBin2Fill />
            </Button>
        </>
    )
}

export default TodosActions