import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Home from "../modules/home";
import About from "../modules/about";
import Blogs from "../modules/blog";
import BlogDetails from "../modules/blog/blogDetails";
import Layout from "./layout";
import Login from "../modules/login";
import SignIn from "../modules/signin";
import SignUp from "../modules/signup";
import Users from "../modules/users";
import Products from "../modules/products";
import Global from "../modules/global";
import Cacheing from "../modules/cacheing";
import { ReduxComp } from "../modules/reduxComp";
import Counter from "../modules/useReducer";
import AuthWrapper from "./authWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
      { path: "/global", element: <Global /> },
      { path: "/cacheing", element: <Cacheing /> },
      { path: "/redux", element: <ReduxComp /> },
      { path: "/useReducer", element: <Counter /> },
      {
        path: "/blogs",
        element: <Blogs />,
        // children: [
        // ]
      },
      { path: "/blog-details/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "/",
    element: <AuthWrapper />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

export default function RoutesWrapper() {
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blogs" element={<Blogs />}>
    //       <Route path="blog-details" element={<BlogDetails />} />
    //     </Route>
    //   </Route>
    //   <Route path="/login" element={<AuthWrapper />}>
    //     <Route path="/login" element={<Login />} />
    //   </Route>
    // </Routes>
  );
}
