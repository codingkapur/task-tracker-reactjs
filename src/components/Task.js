import { FaTimes } from "react-icons/fa";

function Task ({task,onDelete, onDoubleClick}) {
    return (
        <div className={task.status ? "task-container active" : "task-container"} onDoubleClick = {()=> onDoubleClick(task.id)}>
            <div className="task-container__left">
                <h3 className="task-name">{task.text}</h3>
                <h4 className="task-time">{task.time}</h4>
            </div>
            <FaTimes onClick={()=> onDelete(task.id)} />
        </div>
    )
}
export default Task;