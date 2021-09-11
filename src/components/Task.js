import { FaTimes } from "react-icons/fa";

function Task ({task,onDelete}) {
    return (
        <div className="task-container">
            <div className="task-container__left">
                <h3 className="task-name">{task.text}</h3>
                <h4 className="task-time">{task.time}</h4>
            </div>
            <FaTimes onClick={()=> onDelete(task.id)} />
        </div>
    )
}
export default Task;