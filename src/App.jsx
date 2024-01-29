import { Route, Routes } from "react-router"
import Home from "./components/pages/Home"
import Destination from "./components/pages/Destination"
import Crew from "./components/pages/Crew"
import Technology from "./components/pages/Technology"
import Header from "./components/Header"
function App() {

  return (
    <>
    <Header />

    <Routes>
     <Route exact path="/" Component={Home} />
     <Route  path="/destination" Component={Destination} />
     <Route  path="/crew" Component={Crew} />
     <Route  path="/technology" Component={Technology} />
    </Routes>

    </>
  )
}

export default App
