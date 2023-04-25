import { useState } from 'react'
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = ['button_1', 'button_2', 'button_3', 'button_4']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return <div className="App">
    <Counter count={count} />
    {
      texts.map((text) => {
        return <Button onClick={incrementCount} text={text} />
      })
    }
    {/* <Button onClick={incrementCount} text={texts[0]} />
    <Button onClick={incrementCount} text={texts[1]} />
    <Button onClick={incrementCount} text={texts[2]} />
    <Button onClick={incrementCount} text={texts[3]} /> */}
  </div>
}

export default App;
