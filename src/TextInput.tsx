import React from 'react';
import './App.css';


interface handleSubmitType {
  handleSubmit:()=>void
}
const TextInput = ({ handleSubmit }:handleSubmitType) => {
  return (
    <div>
      <form className='addTodo' onSubmit={handleSubmit}>
        <input className='text' name='task' type='text' />
        <input type='submit' value='sumbit' />
      </form>
    </div>
  );
};

export default TextInput;
