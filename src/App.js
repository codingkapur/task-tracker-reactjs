import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}
export default App;
