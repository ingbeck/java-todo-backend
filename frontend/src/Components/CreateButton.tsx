import {ChangeEvent, useState} from "react";
import "./TodoCard/TodoCard.css"
import "../Pages/TodoEdit.css"

type CreateButtonProps={
    addTodo:(description:string)=>void
}


function CreateButton(props:CreateButtonProps) {

    const[isClicked, setIsClicked] = useState<boolean>(false)
    const[formData, setFormData] = useState<string>("")
    function createTodo(){
        props.addTodo(formData)
        setIsClicked(false)
        setFormData("")
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        setFormData(value)
    }



    return (
        <>
            {isClicked &&
                <div className={"todoCard"}>
                    <div className="wrapper">
                        <input type={"text"} id={"description"} name={"description"} value={formData} onChange={handleChange}/>
                        <button onClick={createTodo}>add</button>
                    </div>
                </div>
            }
            <button onClick={() => setIsClicked(true)}>Add Todo</button>
        </>
    )
}

export default CreateButton