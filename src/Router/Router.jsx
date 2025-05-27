import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "../Pages/Home"
import Details from "../Pages/Details"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import Aboutus from "../Pages/Aboutus"



function Layout() {
  return (
    <>
<Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home/> },
{ path: "/:id", element: <Details/> },
{ path: "/aboutus", element: <Aboutus/> },

    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router