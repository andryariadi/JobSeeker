import { createBrowserRouter, redirect } from "react-router-dom";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import Home from "../views/HomePage";
import CompanyPage from "../views/CompanyPage";
import Sidebar from "../components/Sidebar";
import AddJobPage from "../views/AddJobPage";
import AddCompanyPage from "../views/AddCompanyPage";
import Layout from "../components/Layout";
import EditJob from "../views/EditJobPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    // loader: () => {
    //   const accessToken = localStorage.getItem("access_token");
    //   if (!accessToken) {
    //     throw redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-job",
        element: <AddJobPage />,
      },
      {
        path: "company",
        element: <CompanyPage />,
      },
      {
        path: "add-company",
        element: <AddCompanyPage />,
      },
      {
        path: "jobs/:id",
        element: <EditJob />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    // loader: () => {
    //   const accessToken = localStorage.getItem("access_token");
    //   if (accessToken) {
    //     throw redirect("/");
    //   }
    //   return null;
    // },
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);

export default router;
