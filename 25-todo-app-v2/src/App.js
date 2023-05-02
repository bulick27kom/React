import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todoArray, setTodoArray] = useState([]);

  function addTodoToArray(text) {
    const newTodo = {
      text: text,
      isCompleated: false,
      id: uuidv4(),
    }
    setTodoArray([...todoArray, newTodo])
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
