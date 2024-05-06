import Navigationbar from "./components/Navbar/Navigationbar"

import Home from "./routes/Home/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import List from "./routes/list/List"
import Layout from "./routes/layout/Layout"

function App() {


   const router = createBrowserRouter([
   {
      path:"/",
      element: <Layout/>,
      children:[
         {
            path:"/",
            element:<Home/>
         },
         {
            path:"/List",
            element:<List/>
         }
      ]
   }
   ])
  return ( 

   <RouterProvider router={router}/>
  )
}

export default App