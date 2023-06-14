import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import AuthProvider from './components/providers/AuthProvider'
import Home from './components/Home/Home';
import Registration from './components/Registration';
import LoginPage from './components/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Instructors from './Pages/Instructors';
import Error from './Pages/Error';
import Classes from './Pages/Classes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/layout/Dashboard'
import Main from './components/layout/Main'
import SelectedClass from './dashboard/SelectedClass'
import PrivateRoute from './components/route/PrivateRoute'
import EnrolledClasses from './dashboard/EnrolledClasses'
import PaymentHistory from './dashboard/PaymentHistory'
import Addclass from './dashboard/Addclass'
import Myclasses from './dashboard/Myclasses'
import ManageClass from './dashboard/ManageClass'
import ManageUsers from './dashboard/ManageUsers'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Payment from './Payment/Payment'
import DashboardHome from './dashboard/DashboardHome'


const queryClient = new QueryClient()

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
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: 'selected',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: 'enrolled',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'addclass',
        element: <Addclass></Addclass>
      },
      {
        path: 'myclasses',
        element: <Myclasses></Myclasses>
      },
      {
        path: 'manage-class',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "payment",
        element:<Payment></Payment>
        
      },
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
