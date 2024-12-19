import CardInvertedColors from "./pages/components/card";
import { Children } from "react";
import Mainpage from "./pages/Mainpage";
import { Router, Route, RouterProvider } from "react-router";
import SmallNav from "./pages/components/SmallNav";
import BigNav from "./pages/components/BigNav";
import Overview from "./pages/Overview"
import Account from "./pages/Account";
import Customer from "./pages/Customer";
import Setting from "./pages/Setting";
import Error from "./pages/Error";

function App() {
  const routes = [
    {
      path: "/",
      element: <Mainpage />,
      Children: [
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "Setting",
          element: <Setting />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ];

  return (
    <>
     <Overview/>
    </>
  );
}

export default App;
