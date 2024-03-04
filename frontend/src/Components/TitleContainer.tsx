import "./TitleContainer.css"

type TitleContainerProps = {
    title:string
}
function TitleContainer(props:Readonly<TitleContainerProps>) {

    return (
        <>
            {props.title === "OPEN" && <div className="titleContainerOpen">
                <span className="title">{props.title }</span>
            </div>}
            {props.title === "DOING" && <div className="titleContainerDoing">
                <span className="title">{props.title}</span>
            </div>}
            {props.title === "DONE" && <div className="titleContainerDone">
                <span className="title">{props.title}</span>
            </div>}
        </>
    )
}

export default TitleContainer
