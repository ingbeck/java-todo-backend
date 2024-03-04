import "./TodoCard.css"
type TodoCardProps = {
    title:string
}
function TodoCard(props: Readonly<TodoCardProps>) {

    return (
        <>
            <div className="todoCard">
                <div className="wrapper">
                    <h3 className="Title">{props.title}</h3>

                </div>
                <p className="Description">
                    asdasdadadadadasdasdasdasdasad sadsadasdsadasdsa dasdsadasdasdasdasdasd
                </p>
            </div>
        </>
    )
}

export default TodoCard
