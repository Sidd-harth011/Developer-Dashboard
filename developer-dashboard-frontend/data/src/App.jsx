import CardInvertedColors from "./pages/components/card";
import { Children } from "react";
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
import { store } from "./pages/redux/reducer";
import Sign from "./pages/login _signup/Sign";
import Login from "./pages/login _signup/login";
function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Mainpage />,
        children: [
          {
            path: "/",
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
            path:"/log-in",
            element:<Login/>
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ]
  )

  return (
    <>
      
     <RouterProvider router={routes}/>
    </>
  );
}

export default App;
