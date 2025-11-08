import CardInvertedColors from "./pages/components/card";
import { Children, useEffect } from "react";
import Mainpage from "./pages/Mainpage";
import { Router, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import SmallNav from "./pages/components/SmallNav";
import BigNav from "./pages/components/BigNav";
import Overview from "./pages/Overview"
import Account from "./pages/Account";
import Customer from "./pages/Customer";
import Setting from "./pages/Setting";
import Error from "./pages/Error";
import Integration from "./pages/Integration";
import Form from "./pages/Form"
import Sign from "./pages/login _signup/Sign";
import Login from "./pages/login _signup/Login";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {Provider} from 'react-redux'
import People from "./pages/People";
import Message_page from "./pages/Message_page";


function App() {

  
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Mainpage />,
        children: [
          {
            path: "/overview",
            element: <Overview />,
          },
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "integration",
            element: <Integration />,
          },
          {
            path: "customer",
            element: <Customer />,
          },
          {
            path: "/setting",
            element: <Setting />,
          },
          {
            path: "/sign-up",
            element: <Sign />,
          },
          {
            path:"/",
            element:<Login />
          },
          {
            path: "*",
            element: <Error />,
          },
          {
            path:"/people",
            element:<People/>
          },
          
        ],
      },
      {
        path:"/message-page",
        element:<Message_page/>
      }
    ]
  )

  return (
    <>
      
      <RouterProvider router={routes}/>     
          
    </>
  );
}

export default App;
