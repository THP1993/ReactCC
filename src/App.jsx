import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, {useState} from 'react';
import Counter from "./components/Counter";


function App() {

  const [showModal, setShowModal] = useState(false)

  function onTodoDelete () {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  return (
    <div>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish interview questions" />
        <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job" />
      </div>
      {showModal && <Modal phrase="Are You Sure?"/>}
    </div>
  );
}

export default App;
