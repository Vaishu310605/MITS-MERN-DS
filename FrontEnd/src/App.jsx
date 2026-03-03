import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import{Routes,Route} from 'react-router-dom'
const App= () => {
  const element=<div>Hello World</div>
  return (
  <>
     <Navbar/>
     <Routes>
     <Route path="/Home"element={<Home/>}></Route>
      <Route path="/About"element={<About/>}></Route>
      <Route path="/Contact"element={<Contact/>}/>
        <Route path="/ServicesS"element={<Services/>}/>

     </Routes>
   </>

    
 
  )
}

export default App
