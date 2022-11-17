import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App m-5">
      <h1>TodoList</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
