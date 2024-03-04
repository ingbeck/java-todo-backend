import "./HeaderComponent.css"
import SearchComponent from "./SearchComponent.tsx";
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
                <SearchComponent/>
            </header>
        </>
    )
}

export default HeaderComponent
