import CardInvertedColors from "./pages/components/card";
import { Children } from "react";
import Mainpage from "./pages/Mainpage";
import { Router, Route, RouterProvider } from "react-router";

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
      {/* <RouterProvider router={routes}>
        <Mainpage />
      </RouterProvider> */}
      <CardInvertedColors/>
    </>
  );
}

export default App;
