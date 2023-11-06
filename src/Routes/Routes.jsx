import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddBook from "../Pages/AddBook/AddBook";
import AddCategory from "../Pages/AddCategory/AddCategory";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
        },
        {
          path:'/books/category/:category',
          element: <Books/>,
          loader: ({params})=>fetch(`http://localhost:5000/books/category/${params.category}`)
        },
        {
          path: '/book/:id', 
          element: <BookDetails/>, 
          loader: ({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
        
      ]
    },
  ]);
  

export default router;