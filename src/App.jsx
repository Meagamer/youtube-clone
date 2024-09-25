import Nav from "./components/Nav"
import { useState } from 'react';

function App() {
  const [searchopen, setSearchopen] = useState(false)
  console.log(searchopen);

  return (
    <>
<Nav isOpen={searchopen} setOpen={setSearchopen}/>
    </>
  )
}

export default App