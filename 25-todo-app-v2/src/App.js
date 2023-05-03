import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [compleatedTodos, setCompleatedTodos] = useState(0)

  function increaseCompleatedTodosCounter() {
    setCompleatedTodos(compleatedTodos + 1)
  }
  function decreaseCompleatedTodosCounter() {
    setCompleatedTodos(compleatedTodos - 1)
  }

  function ResetAllCompleatedMarks() {
    setTodoArray(todoArray.map((todo) =>
      todo.isCompleated
        ? { ...todo, isCompleated: !todo.isCompleated }
        : { ...todo }
    ))
    setCompleatedTodos(0)
  }

  function DeleteCompleatedTodos() {
    setTodoArray(todoArray.filter((todo) => !todo.isCompleated
    ))
    setCompleatedTodos(0)
  }

  function addTodoToArray(text) {
    const newTodo = {
      text: text,
      isCompleated: false,
      id: uuidv4(),
    }
    setTodoArray([...todoArray, newTodo])
  }
  function removeTodoFromArray(id) {
    setTodoArray(todoArray.filter((todo) => todo.id !== id))
  }

  function markIsChecked(id) {
    setTodoArray(todoArray.map((todo) =>
      todo.id === id
        ? { ...todo, isCompleated: !todo.isCompleated }
        : { ...todo }
    ))
  }

  return <div className="App">
    <h1>Todo App</h1>
    <TodoForm addTodoToArray={addTodoToArray} />
    <TodosActions
      compleatedTodos={compleatedTodos}
      ResetAllCompleatedMarks={ResetAllCompleatedMarks}
      DeleteCompleatedTodos={DeleteCompleatedTodos}
    />
    <TodoList
      todoArray={todoArray}
      removeTodoFromArray={removeTodoFromArray}
      markIsChecked={markIsChecked}
      increaseCompleatedTodosCounter={increaseCompleatedTodosCounter}
      decreaseCompleatedTodosCounter={decreaseCompleatedTodosCounter}
      compleatedTodos={compleatedTodos}
    />
  </div>
}

export default App;
