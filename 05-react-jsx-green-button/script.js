
//let counter = 0;
const App = () => {
    const [buttonText, setButtonText] = React.useState('Click me')
    
    const onButtonClick = () => {
        setButtonText('Hello from React')
       // setButtonText((counter % 2 === 0) ? 'hello from React': 'Click me')
        //counter++
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