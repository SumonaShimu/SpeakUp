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
import Home from './components/Home/Home';
import Registration from './components/Registration';
import LoginPage from './components/LoginPage';


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
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
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
