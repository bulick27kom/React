import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todoArray, setTodoArray] = useState([]);

  function addTodoToArray(text) {
    setTodoArray([...todoArray, text])
  }
  function removeTodoFromArray(index) {
    //setTodoArray(todoArray.splice(index))
    setTodoArray(todoArray.filter((_, idx) => idx !== index))
  }

  return <div className="App">
    <h1>Todo App</h1>
    <TodoForm addTodoToArray={addTodoToArray} />
    <TodoList todoArray={todoArray} removeTodoFromArray={removeTodoFromArray} />
  </div>
}

export default App;
