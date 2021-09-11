function AddTask() {
    return (
        <form className="form-container">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add a Task"></input>
            </div>
            <div className="form-control">
                <label>Date and Time</label>
                <input type="text" placeholder="Date and Time"></input>
            </div>
            <input type="submit" value="Save Task" className="btn btn-save-task"></input>
        </form>
    )
}

export default AddTask;