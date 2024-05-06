import Navigationbar from "./components/Navbar/Navigationbar"
import "./layout.scss"
import Home from "./routes/Home/Home"

function App() {
  return (
    <div className="layout">
         
       <div className="navbar">
          <Navigationbar/>
       </div>
       <div className="home">
          <Home/>
       </div>
       
    </div>
  )
}

export default App