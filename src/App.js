import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [taskData, updateTaskData] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      time: "12th September 2021",
    },
    {
      id: 2,
      text: "Dentist's Appointment",
      time: "13th September 2021",
    },
    {
      id: 3,
      text: "Lawyer's Appointment",
      time: "14th September 2021",
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1;
    const newTask = {id, ...task};
    updateTaskData([...taskData, newTask]);
    console.log(taskData);
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd = {addTask}/>
      <Tasks tasks={taskData}/>
    </div>
  );
}
export default App;
