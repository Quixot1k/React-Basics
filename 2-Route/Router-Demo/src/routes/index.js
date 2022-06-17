import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";
import Detail from "../pages/Home/Message/Detail";

const routes = [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home/*",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail/:id/:title",
            element: <Detail />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/home/news" />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];

export default routes;
