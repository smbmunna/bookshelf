import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider';
import BookProvider from './Providers/BookProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </AuthProvider>
  </React.StrictMode>,
)
