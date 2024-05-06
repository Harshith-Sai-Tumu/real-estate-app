import Navigationbar from "../../components/Navbar/Navigationbar"
import { Outlet } from "react-router-dom"
import "./layout.scss"

const Layout = ()=>{
    return(
       <div className="layout">
         
          <div className="navbar">
             <Navigationbar/>
          </div>

          <div className="home">
             <Outlet/>
          </div>
       
       </div>
    )
}

export default Layout