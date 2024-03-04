import "./TodoCard.css"
import {useState} from "react";
type TodoCardProps = {
    todo:Todo
}
function TodoCard(props: Readonly<TodoCardProps>) {

    const[isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <>
            <div className="todoCard" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => {
                setIsHovered(false);
                setIsClicked(false);
            }}>
                <div className="wrapper">
                    <h3 className="Title">{props.todo.description}</h3>
                </div>
                <div className="wrapperButtons">
                    {isHovered && <button className={"buttonEdit"} onClick={() => setIsClicked(true)}>Edit</button>}
                </div>
            </div>
        </>
    )
}

export default TodoCard
