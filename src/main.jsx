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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Instructors from './components/Instructors';
import Error from './Pages/Error';

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
        path: "/ins",
        element: <Instructors></Instructors>,
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
  {
    path:'*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer/>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
