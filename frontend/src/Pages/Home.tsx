import "./Home.css"
import TitleContainer from "../Components/TitleContainer.tsx";
import TodoCard from "../Components/TodoCard/TodoCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import CreateButton from "../Components/CreateButton.tsx";

type ApiResponse = [
    id:string,
    description:string,
    status:string
]
function Home() {

    const[data, setData] = useState<ApiResponse>([])

    function fetchData(){
        axios.get("api/todo")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error.message))
    }

    function putData(todo:Todo){
        axios.put("/api/todo/"+todo.id+"/update",{
            id:todo.id,
            description:todo.description,
            status:todo.status
        })
            .catch(error => console.log(error.message))
    }

    function postData(description:string){
        axios.post("api/todo", {description:description, status:"OPEN"})
            .catch(error => console.log(error.message))
    }


    useEffect(
        fetchData,
        [putData, postData]
    )

    const openTodos= data.filter((todo) => todo.status=="OPEN")
    const doingTodos = data.filter((todo) => todo.status=="IN_PROGRESS")
    const doneTodos = data.filter((todo) => todo.status=="DONE")

    return (
        <>
            <div className="grid">
                <div className={"swimmlane"}>
                    <TitleContainer title={"OPEN"}/>
                    <CreateButton addTodo={postData}/>
                    {openTodos.map((todo) => <TodoCard todo={todo} updateStatus={putData}/>)}
                </div>
                <div className={"swimmlane"}>
                    <TitleContainer title={"DOING"}/>
                    {doingTodos.map((todo) => <TodoCard todo={todo} updateStatus={putData}/>)}
                </div>
                <div className={"swimmlane"}>
                    <TitleContainer title={"DONE"}/>
                    {doneTodos.map((todo) => <TodoCard todo={todo} updateStatus={putData}/>)}
                </div>
            </div>

        </>
    )
}

export default Home
