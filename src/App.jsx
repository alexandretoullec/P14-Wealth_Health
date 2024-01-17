import "./styles/general.scss";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import CurrentEmployee from "./pages/currentEmployee/CurrentEmployee";
import Error from "./pages/error/Error";
import DropDownMenu from "./components/dropDownMenu/DropdownMenu";
// import NavBar from "./components/dropDownMenu/Navbar";
// import NavItem from "./components/dropDownMenu/navItem/NavItem";
// import ArrowIcon from "./icons/arrow.svg?react";
// import BellIcon from "./icons/bell.svg?react";
// import BoltIcon from "./icons/bolt.svg?react";
// import CaretIcon from "./icons/caret.svg?react";
// import CogIcon from "./icons/cog.svg?react";
// import ChevronIcon from "./icons/chevron.svg?react";
// import MessengerIcon from "./icons/messenger.svg?react";
// import PLusIcon from "./icons/pLus.svg?react";
// import DropDownMenu from "./components/dropDownMenu/dropDownMenu/DropDownMenu";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <DropDownMenu />
        <Header />

        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
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
