function ResetButton({ count, onClick }) {
    const buttonStyle = { backgroundColor: 'lightgreen' }
    console.log('count :>> ', count);
    console.log('onClick :>> ', onClick);
    return (
        count > 0 && (
            <div>
                <button style={buttonStyle} onClick={onClick}>
                    Reset
                </button>
            </div>
        )
    )

}



export default ResetButton