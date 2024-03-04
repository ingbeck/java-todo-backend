
import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent.tsx";

function App() {

  return (
    <>
        <HeaderComponent/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"Todo/:id"} element={<Todo/>}
        </Routes>
    </>
  )
}

export default App
