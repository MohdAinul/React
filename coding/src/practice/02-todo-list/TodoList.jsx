import { useState } from "react";

function TodoList() {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  function handleAdd() {
    const cleanedTask = task.trim();
    if (cleanedTask === "") {
      return;
    }
    settasks([...tasks, cleanedTask]);
    settask("");
  }

  function handleDelete(indextoDelete) {
    const updatedTask = tasks.filter((item, index) => index !== indextoDelete);
    settasks(updatedTask);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="write your task"
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
