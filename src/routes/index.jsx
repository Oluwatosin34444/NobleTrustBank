import HomePage from '../pages/Home/Home';
import Login from '../components/loginforbankapp/Login';
import SignUp from '../components/sign-up/SignUp';
import Dashboard from '../components/Dashboard/Dashboard';
import MyAccount from '../components/HomePage/HomePage';
import GoalSpree from '../components/Savings/savings';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/",
        element: <HomePage />,
        // children: [
        //         {
        //             path: "my-account",
        //             element: <MyAccount />
        //         },
        //         {
        //             path: "save", // Removed leading slash
        //             element: <GoalSpree />
        //         },
        //     ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
                {                      
                    path: "my-account",
                    element: <MyAccount />
                },
                {
                    path: "save", // Removed leading slash
                    element: <GoalSpree />
                },
            ]




        // children: [
        //     {
        //         path: "my-account",
        //         element: <MyAccount />
        //     },
        //     {
        //         path: "save", // Removed leading slash
        //         element: <GoalSpree />
        //     },
        // ]
    },
    {
        path: "/acc",
        element: <MyAccount /> // Consider renaming this to avoid confusion with Dashboard's routes
    },
 

    

]);
