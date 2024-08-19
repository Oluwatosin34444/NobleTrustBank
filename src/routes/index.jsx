import HomePage from '../pages/Home/Home';
import Login from '../components/loginforbankapp/Login';
import SignUp from '../components/sign-up/SignUp';
import DashboardOne from '../components/Dashboard/Dashboard';

import {
    createBrowserRouter
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        // children: [
        //     {
        //       path: "/dashboard",
        //       element: <DashboardOne />,
             
        //     },
        //   ],
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/dashboard",
        element: <DashboardOne />
    },




]);