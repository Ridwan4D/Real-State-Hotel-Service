import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut.";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "./PrivateRoute";
import WishPage from "../pages/WishPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader:()=>fetch("/fakeCategory.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            {/* <UserProfile></UserProfile> */}
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishPage",
        element: (
          <PrivateRoute>
            <WishPage></WishPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
