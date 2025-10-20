import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Homep from "../pages/Homep";


import CategoriesNews from "../pages/CategoriesNews";
import Auth from "../pages/Auth";
import Login from "../component/Login";
import Register from "../component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
         loader:()=>fetch('/news.json'),
        Component: Homep,
      },
      {
        path:"/category/:id",
        loader:()=>fetch('/news.json'),
        element:<CategoriesNews></CategoriesNews>
      },
    ],
  },{
    path:"/auth",
    element:<Auth></Auth>,
    children:[{
      path:'/auth/login',
      element:<Login></Login>
    },{
      path:'/auth/register',
      element:<Register></Register>
    }]
  },{
    path:"*",
    element:<h3>Error</h3>
  }
]);
export default router;
