import React from 'react';
import './App.css';

const TodoList = (props) => {
  const { todo, setTodo } = props;
  const handlleDelete = (element) => {
    console.log(element);
    setTodo(todo.filter((clicked) => clicked.id !== element.id));
    fetch(`https://todo-backend9864123.herokuapp.com/todolist/${element.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div>
      {todo.map((element) => (
        <div key={element.id}>
          <div className='singleList'>
            <input type='checkbox' />
            <h3 className='item'>{element.task}</h3>
            <span
              onClick={() => {
                handlleDelete(element);
              }}
              className='deleteIcon'
            >
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
