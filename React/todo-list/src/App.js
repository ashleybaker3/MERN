import React, { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState(false);
  const [list, setList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      task: task,
      complete: complete
    };

    const taskList = [newTask, ...list];
    setList(taskList);
    setTask("");
  }

  const updateComplete = (idx) => {
    const updatedList = list.map((item, i) => {
      if(idx === i) {
        item.complete = !item.complete;
      }
      return item;
    })
    setList(updatedList);
  }

  const deleteTask = (e, taskToDelete) => {
    e.preventDefault();

    const filteredTasks = list.filter((task) => {
      return taskToDelete !== task;
    })

    setList(filteredTasks);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        addTask(e);
      }}>
        <input onChange={(e) => {
                setTask(e.target.value);
              } }
                type="text"
                value={task} />
        <input type="submit" value="Add Task" className="mx-3"/>
      </form>
      {list === null ? (
            <p>No tasks yet!</p>
          ) : (
            list.map((item, i) => {
              const taskClasses = [];

              if(item.complete) {
                taskClasses.push("Strike");
              }
              return (
                <div key={i} className="d-flex align-items-center justify-content-center">
                  <input onChange={(e) => {
                    updateComplete(i);
                  }}
                    type="checkbox" 
                    checked={item.complete}
                    className="mx-2"
                  />
                  <span className={taskClasses.join("")}>{item.task}</span>
                  <button onClick={(e) => {
                    deleteTask(e, item);
                  }} className="m-3">Delete</button>
                </div>
              );
            })
          )}
    </div>
  );
}

export default App;
