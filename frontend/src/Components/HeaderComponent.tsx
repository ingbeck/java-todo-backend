import "./HeaderComponent.css"
import SearchbarComponent from "./SearchbarComponent.tsx";
import {useNavigate} from "react-router-dom";
function HeaderComponent() {

    const navigate = useNavigate()

    function navigateToHome(){
        navigate("/")
    }

    return (
        <>
            <header>
                <span className="title" onClick={navigateToHome}>ToDo App</span>
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
