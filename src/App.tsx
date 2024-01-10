import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
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
          path: "/profil",
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
