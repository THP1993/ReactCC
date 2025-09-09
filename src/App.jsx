import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish interview questions" />
        <Todo title="Land a 100k Job" />
      </div>
      <Modal phrase="Are You Sure?"/>
    </div>
  );
}

export default App;
