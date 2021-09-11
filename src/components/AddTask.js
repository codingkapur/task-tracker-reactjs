import { useState } from 'react';
function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Enter a task you little shit!")
            return
        }

        onAdd({text, time})

        setText('');
        setTime('');
    }
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add a Task" value={text} onChange={((e)=> setText(e.target.value))}></input>
            </div>
            <div className="form-control">
                <label>Date and Time</label>
                <input type="text" placeholder="Date and Time" value={time} onChange = {((e)=> setTime(e.target.value))}></input>
            </div>
    
            <input type="submit" value="Save Task" className="btn btn-save-task" onSubmit={onAdd}></input>
        </form>
    )
}

export default AddTask;