import { createBrowserRouter } from "react-router-dom";
import Home from "../views/HomePage";
import DetailJob from "../views/DetailJobPage";
import Layout from "../views/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs/:id",
        element: <DetailJob />,
      },
    ],
  },
]);

export default router;
