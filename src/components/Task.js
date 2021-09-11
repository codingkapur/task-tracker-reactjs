function Task ({task}) {
    return (
        <div className="task-container">
            <div className="task-container__left">
                <h3 className="task-name">{task.text}</h3>
                <h4 className="task-time">{task.time}</h4>
            </div>
            <p>Delete task Button</p>
        </div>
    )
}
export default Task;