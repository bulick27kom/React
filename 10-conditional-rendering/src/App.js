import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={7} hasPet={true} />
      <PetInfo animal="fish" age={2} hasPet=" " />
    </div>
  )
}

export default App;
