import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import Main from './components/Main';
import AuthProvider from './components/providers/AuthProvider'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Payment from './Payment/Payment';
import Login from './components/Login';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/pay",
        element: <Payment></Payment>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
