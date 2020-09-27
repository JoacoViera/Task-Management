import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoForm from "./components/TodoForm";
import { todos } from "./todos.json";


const App = (props) => {

  const [tasks, setTasks] = useState(todos);

  const handleAddTodo = (todo) => {
    setTasks([...tasks, todo]);
  }

  const handleTodoTitleColor = (priority) => {
    let className = "badge badge-pill badge-";
    if (priority.toLowerCase() === "low") {
      return className += "success";
    } else if (priority.toLowerCase() === "medium") {
      return className += "warning";
    } else {
      return className += "danger";
    }
  }

  const taskComponent = tasks.map((todo, i) => {
    return (
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
          <div className="card-header bg-info">
            <h3 style={{ fontWeight: "bold" }}>{todo.title}</h3>
            <span className={handleTodoTitleColor(todo.priority)} ml-2>
              {todo.priority.toUpperCase()}
            </span>
          </div>
          <div className="card-header bg-light">
            <p style={{ fontSize: 23 }}>{todo.description}</p>
            {/* <p>
              <mark>{todo.responsible}</mark>
            </p> */}
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => {
                // Delete without confirmation
                // if (window.confirm("Are you sure you want to delete it?")) {
                //   let t = tasks.filter((e, h) => { return i !== h; });
                //   setTasks(t);
                // }
                // Delete without confirmation
                let t = tasks.filter((e, h) => { return i !== h; });
                setTasks(t);
              }}
            >
              Delete
              </button>
          </div>
        </div>
      </div >
    );
  });

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="https://www.google.com" className="text-white">
          Tasks
            <span className="badge badge-pill badge-light ml-2">
            {tasks.length}
          </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={handleAddTodo} />
          </div>
          <div className="col-md-9">
            <div className="row">{taskComponent}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
