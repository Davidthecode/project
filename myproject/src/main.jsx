import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import ErrorPage from './components/errorPage';
import Profile from './components/profile';
import About from './components/about'
import Edit from './components/edit'
import Settings from './components/settings'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/profile",
        element: <Profile />
      },
      {
        path: "/home/about",
        element: <About />
      },
      {
        path: "/home/edit",
        element: <Edit />
      },
      {
        path: "/home/settings",
        element: <Settings />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);


  
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    
)
