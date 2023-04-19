
//let counter = 0;
const App = (props) => {
    console.log('props :>> ', props);
    const { initialbuttonText } = props
    const [buttonText, setButtonText] = React.useState(initialbuttonText)
    const [classesList, setClassesList] = React.useState('');
    const [counter, setCounter] = React.useState(props.counter);

    const onButtonClick = () => {
        let count = Number(counter);
        console.log(count);
        setButtonText((count % 2 === 0) ? 'hello from React' : initialbuttonText)
        count++;
        setCounter(String(count));
        setClassesList('green-btn')
    }
    return (
        <div className="app" >
            <button className={classesList} onClick={onButtonClick} counter={counter}>
                {buttonText}
            </button>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialbuttonText="Click me" counter="0" />)