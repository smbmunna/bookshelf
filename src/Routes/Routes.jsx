import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddBook from "../Pages/AddBook/AddBook";
import AddCategory from "../Pages/AddCategory/AddCategory";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ReadBook from "../Pages/ReadBook/ReadBook";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/addBook',
        element: <PrivateRoute><AddBook /></PrivateRoute>
      },
      {
        path: '/addCategory',
        element: <PrivateRoute><AddCategory /></PrivateRoute>
      },
      {
        path: '/books/category/:category',
        element: <Books />,
        loader: ({ params }) => fetch(`https://bookshelfserver-brown.vercel.app/books/category/${params.category}`)
      },
      {
        path: '/book/:id',
        element: <PrivateRoute><BookDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://bookshelfserver-brown.vercel.app/book/${params.id}`)
      },
      {
        path: '/borrowedBooks',
        element: <PrivateRoute><BorrowedBooks /></PrivateRoute>,         
      },
      {
        path:'/allBooks',
        element: <PrivateRoute><AllBooks/></PrivateRoute>
      },
      {
        path: '/updateBook/:id',
        element: <PrivateRoute><UpdateBook/></PrivateRoute>,
        loader: ({params})=>fetch(`https://bookshelfserver-brown.vercel.app/book/${params.id}`)
      },
      {
        path:'/readBook/:id',
        element:<ReadBook/>,
        loader:({params})=>fetch(`https://bookshelfserver-brown.vercel.app/book/${params.id}`)
      }
    ]
  },
]);


export default router;