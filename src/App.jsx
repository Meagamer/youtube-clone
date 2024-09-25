import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import { useState } from 'react';


function App() {
  const [searchopen, setSearchopen] = useState(false)
  return (
    <>
<Nav status={{isOpen: searchopen, setOpen: setSearchopen}}/>
    </>
  )
}

export default App