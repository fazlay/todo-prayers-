import React from 'react';
import './App.css';

const TextInput = ({ handleSubmit }) => {
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type='text' name='task' label='taksInput' />
        <input type='submit' value='sumbit' />
      </form> */}

      <form className='addTodo' onSubmit={handleSubmit}>
        <input className='text' name='task' type='text' label='taksInput' />
        <input type='submit' value='sumbit' />
      </form>
    </div>
  );
};

export default TextInput;
