import React, { useState } from 'react'

const TodoList = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChangeTodo = (event) => {
    setToDo(event.target.value);
  }
  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (toDo === '') return;
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo('');
  }
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmitTodo}>
        <input onChange={onChangeTodo} value={toDo} type='text' placeholder='Write your to do...' />
        <button type='submit'>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default TodoList;