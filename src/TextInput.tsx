import React from 'react';
import './App.css';

 interface dataInput{
  handleSubmit:()=>void
 }

const TextInput = (props) => {
   const {handleSubmit}=props
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
