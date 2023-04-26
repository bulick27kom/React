import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return <div className="App">
    <Wrapper color="lightBlue">
      <h2>Text inside Wrapper</h2>
      <button>Click me</button>
    </Wrapper>
    <Wrapper color="lightGreen">
      <h2>Another text inside Wrapper</h2>
      <p>Some description</p>
      <input type="text" placeholder="Text here"></input>
    </Wrapper>
  </div>
}

export default App;
