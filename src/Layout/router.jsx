import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Component/Home";
import Login from "../Components/UserLogin/Login";
import SignUp from "../Components/UserLogin/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        }
      ],
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path:'/signUp',
      element: <SignUp></SignUp>
    }
  ]);

  export default router