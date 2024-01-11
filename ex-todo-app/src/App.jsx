import { useEffect, useState } from 'react'
import './App.css'


// app component
function App() {
    const [todosData, setTodoData] = useState([]);
    // function to fetch todos data from the server
    const fetchTodos = async () => {
      const
      requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const res = await fetch("hppt://localhost :7000/todoList",
      requestOptions);

      const data = await res.json();
      setTodoData(data);

      // call function to fetch todos data from the server
      useEffect(() => {
        fetchTodos();
      }; [])

    return (
      <>
        <h1>welcome To Express Todo</h1>
        <div style={styles.grid}>
          {todosData.map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
                <button>{Delete}</button>
              </div>
            );
          })}
        </div>
      </>
    )
  
}

export default App
