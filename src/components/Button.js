function Button({text, onClick}) {
    return (
        <button className="btn btn-add-task" onClick={onClick}>{text}</button>
    )
}

export default Button;