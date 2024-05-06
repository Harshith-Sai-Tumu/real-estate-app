import Navigationbar from "./components/Navbar/Navigationbar"

import Home from "./routes/Home/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import List from "./routes/list/List"
import Layout from "./routes/layout/Layout"
import SinglePage from "./routes/singlePage/SinglePage"

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
         },
         {
            path:"/:id",
            element:<SinglePage/>
         }
      ]
   }
   ])
  return ( 

   <RouterProvider router={router}/>
  )
}

export default App