import "./TodoCard.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
type TodoCardProps = {
    todo:Todo
    updateStatus:(todo:Todo) => void
}
function TodoCard(props: Readonly<TodoCardProps>) {

    const[isHovered, setIsHovered] = useState<boolean>(false)
    const navigate = useNavigate()

    function navigateToTodo(){
        navigate("/Todo/"+props.todo.id)
    }

    function newStatus(status:string):void{
        props.updateStatus({
            ...props.todo,
            status:status
        })
    }

    return (
        <>
            <div className="todoCard" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => {
                setIsHovered(false);
            }}>
                <div className="wrapper">
                    <h3 className="Title">{props.todo.description}</h3>
                </div>
                <div className="wrapperButtons">
                    {isHovered && <button className={"buttonEdit"} onClick={navigateToTodo}>Edit</button>}
                    {isHovered && props.todo.status === "IN_PROGRESS" &&
                        <button className={"buttonEdit"} onClick={() => newStatus("DONE")}>DONE</button>}
                    {isHovered && props.todo.status === "DONE" &&
                        <button className={"buttonEdit"} onClick={() => newStatus("IN_PROGRESS")}>DOING</button>}
                </div>
            </div>
        </>
    );
}

export default TodoCard
