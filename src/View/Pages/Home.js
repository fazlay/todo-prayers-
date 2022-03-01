import React, { useState } from 'react';

const Home = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: 'Brush Your Teeth' },
    { id: 2, task: 'Take break fast' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.task.value);
    setTodo([
      ...todo,
      { id: Math.floor(Math.random() * 1000), task: e.target.task.value },
    ]);
  };
  return (
    <div>
      <h1>This is Home</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' name='task' label='taksInput' />
        <input type='submit' value='sumbit' />
      </form>
      {todo.map((element) => (
        <h1 key={element.id}>
          {element.task}{' '}
          <button
            onClick={() => {
              setTodo(todo.filter((clicked) => clicked.id != element.id));
            }}
          >
            X
          </button>{' '}
        </h1>
      ))}
    </div>
  );
};

export default Home;
