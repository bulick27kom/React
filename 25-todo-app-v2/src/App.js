import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todoArray, setTodoArray] = useState([]);

  const completedTodosCount = todoArray.filter((todo) => todo.isCompleated).length


  function resetAllCompleatedMarks() {
    setTodoArray(todoArray.map((todo) =>
      todo.isCompleated
        ? { ...todo, isCompleated: !todo.isCompleated }
        : { ...todo }
    ))
  }

  function deleteCompleatedTodos() {
    setTodoArray(todoArray.filter((todo) => !todo.isCompleated))
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
    {todoArray.length != 0 &&
     <TodosActions
      resetAllCompleatedMarks={resetAllCompleatedMarks}
      deleteCompleatedTodos={deleteCompleatedTodos}
      completedTodosCount={completedTodosCount}
    />}
    <TodoList
      todoArray={todoArray}
      removeTodoFromArray={removeTodoFromArray}
      markIsChecked={markIsChecked}
      completedTodosCount={completedTodosCount}
    />
  </div>
}

export default App;
