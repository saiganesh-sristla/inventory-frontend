import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
    <div className="flex">
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
}

export default App