import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div className="">login page</div>
  },
  {
    path: "/register",
    element: <div className="">regiser page</div>
  },
  {
    path: "/users",
    element: <div className="">user page</div>
  },
  {
    path: "/products",
    element: <div className="">products page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
