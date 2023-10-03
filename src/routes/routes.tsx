import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import App from "../App";
import Checkout from "../pages/Checkout";
import Signup from "../pages/SignUp";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import BookEntry from "../components/BookEntry";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/book',
        element: (
        <PrivateRoute>
          <BookEntry />
          </PrivateRoute>
          ),
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/checkout',
        element: (
        <PrivateRoute>
          <Checkout />
          </PrivateRoute>
          ),
      },
    ],
  },
  
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <Notfound />,
  },

]);

export default routes;