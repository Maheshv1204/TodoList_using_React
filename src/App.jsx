import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(index) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodoIndex) => {
        return prevTodoIndex != index;
      })
    );
  }

  return (
    <main>
      <h1 id="mainline">Next Trip Details i.e Todo List </h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;
