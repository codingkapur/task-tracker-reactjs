import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [taskData, updateTaskData] = useState([]);

  useEffect(()=> {
    const getTasks= async () => {
      const tasksFromServer = await fetchTasks()
      updateTaskData(tasksFromServer)
    }
    getTasks();
  }, [])

  const fetchTasks = async ()=> {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    updateTaskData([...taskData, data])
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    updateTaskData(taskData.filter((x)=> x.id !== id))
  }
  const toggleTask = (id) => {
    updateTaskData(taskData.map((task) => task.id === id? {...task, status: !task.status} : task))
    
  }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddForm(!showAddForm)} />
      {showAddForm? <AddTask onAdd = {addTask}/> : ''}
      <Tasks tasks={taskData} onDelete ={deleteTask} onDoubleClick = {toggleTask}/>
    </div>
  );
}
export default App;
