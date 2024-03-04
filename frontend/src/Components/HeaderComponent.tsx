import "./HeaderComponent.css"
import SearchbarComponent from "./SearchbarComponent.tsx";
function HeaderComponent() {

    return (
        <>
            <header>
                <span className="title">ToDo App</span>
                <div className="filters">
                    <button className="filterbutton">OPEN</button>
                    <button className="filterbutton">DOING</button>
                    <button className="filterbutton">DONE</button>
                </div>
                <SearchbarComponent/>
            </header>
        </>
    )
}

export default HeaderComponent
