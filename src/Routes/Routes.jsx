import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddBook from "../Pages/AddBook/AddBook";
import AddCategory from "../Pages/AddCategory/AddCategory";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element: <Home/>
        }, 
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/registration',
            element: <Registration/>
        }, 
        {
          path: '/addBook',
          element: <AddBook/>
        },
        {
          path:'/addCategory',
          element: <AddCategory/>
        }
        
      ]
    },
  ]);
  

export default router;