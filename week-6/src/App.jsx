import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3000/todos")
        .then( function(response) {
          setTodos(response.data.todos);
        })
      },)

  return (
    <div>
      {todos.map(({title, description}) => <Todo title={title} description={description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h5>
      {description}
    </h5>
  </div>
}

export default App