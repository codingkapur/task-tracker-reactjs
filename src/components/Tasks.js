import Task from './Task';

function Tasks({tasks, onDelete}) {
    return (
        <div className="tasks-container">
            {tasks.map((task)=> {
                return <Task key={task.id} task={task} onDelete={onDelete}/>
            })}
        </div>
    )
}
export default Tasks;