import Button from "../UI/Button"

function TodosActions(props) {
    const { compleatedTodos, ResetAllCompleatedMarks } = props
    return (
        <>
            <Button key="reset" onClick={ResetAllCompleatedMarks} >Reset</Button>
            <Button key="delete" disabled={!compleatedTodos}>Delete Completed</Button>
        </>
    )
}

export default TodosActions