import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [taskData, updateTaskData] = useState([
    {
      key: 1,
      text: "Doctor's Appointment",
      time: "12th September 2021",
      status: false,
    },
    {
      key: 2,
      text: "Dentist's Appointment",
      time: "13th September 2021",
      status: false,
    },
    {
      key: 3,
      text: "Lawyer's Appointment",
      time: "14th September 2021",
      status: false,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={taskData}/>
    </div>
  );
}
export default App;
