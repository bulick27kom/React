

const App = () => {
    let buttonText = 'Click me';
    console.log('Called');
    const onButtonClick = () => {
        buttonText = 'hello from React'
        console.log('buttonText :>> ', buttonText);
    }
    return (
        <div className="app">
            <button onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />)