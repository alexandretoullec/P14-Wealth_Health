import "./styles/general.scss";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import CurrentEmployee from "./pages/currentEmployee/CurrentEmployee";
import Error from "./pages/error/Error";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Header />

        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/current",
          element: <CurrentEmployee />,
        },

        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
