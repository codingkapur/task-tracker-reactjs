import Task from './Task';

function Tasks({tasks}) {
    return (
        <div className="tasks-container">
            {tasks.map((task)=> {
                return <Task key={task.id} task={task}/>
            })}
        </div>
    )
}
export default Tasks;