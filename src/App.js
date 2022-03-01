import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import TextInput from "./TextInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <TextInput></TextInput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
