import React, { ChangeEvent, useEffect, useState } from 'react';
import TextInput from '../../TextInput';
import TodoList from '../../TodoList';

interface TodoType{
  id: number,
        task:string
}

const Home = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [isChanged, setIsChanges] = useState(true);

  useEffect(() => {
    fetch('https://todo-backend9864123.herokuapp.com/todolist')
      .then((res) => res.json())
      .then((data) => {
        console.log('this is clicked');
        setTodo(data);
      });
  }, [isChanged]);

  // fetch('http://localhost:5000/addtodo', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  // .then((response) => response.json())
  //
  // .then((data) => {
  //   console.log('Success:', data);
  // })

  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  const handleSubmit = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.task.value);
    // setTodo([
    //   ...todo,
    //   { id: Math.floor(Math.random() * 1000), task: e.target.task.value },
    // ]);
    //   fetch('https://fathomless-sands-30445.herokuapp.com/products', {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify(newProduct),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setAddProductSuccess(data.acknowledged));
    // };

    fetch('https://todo-backend9864123.herokuapp.com/addtodo', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000),
        task: e.target.task.value,
      }),
    })
      .then((data) => {
        console.log('Success:', data);
        setIsChanges(!isChanged);
        e.target.task.value = '';
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type='text' name='task' label='taksInput' />
        <input type='submit' value='sumbit' />
      </form> */}
      <TextInput handleSubmit={handleSubmit}></TextInput>
      <TodoList todo={todo} setTodo={setTodo}></TodoList>
      {/* {todo.map((element) => (
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
      ))} */}
    </div>
  );
};

export default Home;

//API --------- https://todo-backend9864123.herokuapp.com/
