import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [taskData, updateTaskData] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1;
    const newTask = {id, ...task};
    updateTaskData([...taskData, newTask]);
  }
  const deleteTask = (id) => {
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
