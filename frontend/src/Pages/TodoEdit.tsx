import "./TodoEdit.css"
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

type formInput = {
    description:string
}

function TodoEdit() {

    const params = useParams()
    const id = params.id

    const[todo, setTodo] = useState<Todo>()
    const[formData, setFormData] = useState<formInput>({
        description:""
    })

    const navigate = useNavigate()

    function navigateToHome(){
        navigate("/")
    }

    function fetchData(){
        axios.get("/api/todo/"+id)
            .then(response => setTodo(response.data))
            .catch(error => console.log(error.message))

        setFormData(
            {
                description:formData.description
            }
        )
    }

    function putData(){
        axios.put("/api/todo/"+id+"/update",{
            id:id,
            description:formData.description,
            status:todo?.status
        })
            .catch(error => console.log(error.message))
    }

    useEffect(
        fetchData,
        []
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const name = event.target.name; //<input ... name={"..."} .../>

        setFormData({
            ...formData,
            [name]: value
        })
    }


    function handleOnSubmit(e){
        e.preventDefault()
        putData()
        navigateToHome()
    }

    return (
        <div className={"formCard"}>
            {todo
                ?
                <>
                    <form onSubmit={handleOnSubmit}>
                        <h3>Edit:{todo.description}</h3>
                        <div className="formElement">
                            <label htmlFor={"description"}>Description</label>
                            <input type={"text"} id={"description"} name={"description"} value={formData.description} onChange={handleChange}/>
                        </div>
                        <button type={"submit"}>Submit</button>
                    </form>
                </>
                :
                <h2>Todo not found!</h2>
            }
        </div>
    )
}


export default TodoEdit
