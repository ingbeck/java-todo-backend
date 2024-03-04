
import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent.tsx";

function App() {

  return (
    <>
        <HeaderComponent/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
