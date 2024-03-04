
import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent.tsx";
import TodoEdit from "./Pages/TodoEdit.tsx";

function App() {

  return (
    <>
        <HeaderComponent/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"Todo/:id"} element={<TodoEdit/>}/>
        </Routes>
    </>
  )
}

export default App
