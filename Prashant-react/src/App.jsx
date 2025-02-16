import { useState } from "react";

function App() {
  const [todos , setTodos] = useState( [ {
    title : "Study DSA ",
    description : "from 5 to 10",
    completed : false } , {
    title : "Study cohort",
    description : "from 10 to 12",
    completed : true
    }
  ] );

  function addTodo () {
    setTodos([...todos, {
      title : "new todo",
      description : "adding new todo",
      completed : true
    }])
  }

  return <div>
    <button onClick={addTodo}>ADD A RANDOM TODO</button>
    { todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} />
    })}
  </div>
}

function Todo (props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
