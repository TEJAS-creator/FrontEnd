import React, { useState } from "react";
import "./ToDoList.css"; // Link to the CSS file

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("Coding React");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>📝 To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ol className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span>{task}</span>
                        <div className="task-buttons">
                            <button onClick={() => moveTaskUp(index)}>👆</button>
                            <button onClick={() => moveTaskDown(index)}>👇</button>
                            <button className="delete" onClick={() => deleteTask(index)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
