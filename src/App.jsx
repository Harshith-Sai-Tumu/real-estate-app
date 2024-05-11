import Navigationbar from "./components/Navbar/Navigationbar";

import Home from "./routes/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./routes/list/List";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";
import Login from "./routes/loginPage/Login";
import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/List",
          element: <List />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
