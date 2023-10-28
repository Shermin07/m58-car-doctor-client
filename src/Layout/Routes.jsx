import { createBrowserRouter } from "react-router-dom";


import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurServices from "../Pages/OurServices/OurServices";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/aboutUs",
          element:<AboutUs></AboutUs>
        },
        {
          path:"/ourServices",
          element:<OurServices></OurServices>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>
        }
      
      ]
    },
  ]);

  export default router ;