import React, { useState } from "react";

const TodoForm = (props) => {
  const { onAddTodo } = props;
  const [title, setTitle] = useState('');
  const [responsible, setResponsible] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("PLEASE ADD A TITTLE");
    } else if (!responsible) {
      alert("PLEASE ADD A RESPONSIBLE");
    } else if (!description) {
      alert("PLEASE ADD A DESCRIPTION");
    } else {
      onAddTodo(
        {
          "title": title,
          "responsible": responsible,
          "description": description,
          "priority": priority
        }
      );
    }
  }


  const handleInput = (e) => {
    const { value, name } = e.target;
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'responsible') {
      setResponsible(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'priority') {
      setPriority(value)
    } else {
      console.log('error');
    }
  }

  return (
    <div className="card">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            onChange={handleInput}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="responsible"
            onChange={handleInput}
            className="form-control"
            placeholder="Responsible"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            onChange={handleInput}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <select
            name="priority"
            className="form-control"
            onChange={handleInput}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
          </button>
      </form>
    </div>
  );
}

export default TodoForm;
