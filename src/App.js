import './App.css';
import { Header } from './Header';

import Home from './View/Pages/Home';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <Home></Home>
        {/* <TextInput></TextInput>
        <TodoList></TodoList> */}
      </div>
    </div>
  );
}

export default App;
