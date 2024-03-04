import "./Home.css"
import TitleContainer from "../Components/TitleContainer.tsx";
import TodoCard from "../Components/TodoCard/TodoCard.tsx";
function Home() {

    return (
        <>
            <div className="grid">
                <div className={"swimmlane"}>
                    <TitleContainer title={"OPEN"}/>
                    <TodoCard title="Test"/>
                    <TodoCard title="Test"/>
                </div>
                <div className={"swimmlane"}>

                    <TitleContainer title={"DOING"}/>
                    <TodoCard title="Test"/>
                    <TodoCard title="Test"/>
                </div>
                <div className={"swimmlane"}>

                    <TitleContainer title={"DONE"}/>
                    <TodoCard title="Test"/>
                    <TodoCard title="Test"/>
                </div>
            </div>

        </>
    )
}

export default Home
