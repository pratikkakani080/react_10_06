import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from '../modules/home'
import About from '../modules/about'
import Blogs from '../modules/blog'
import BlogDetails from '../modules/blog/blogDetails'
import Layout from './layout'
import Login from '../modules/login'
import SignIn from '../modules/signin'

const router = createBrowserRouter([
  {
    path: "/",
     element: <Layout />,
     children: [
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <SignIn /> },
      {
        path: "/blogs",
        element: <Blogs />,
        // children: [
        // ]
      },
      { path: "/blog-details/:id", element: <BlogDetails /> },

    ]
  },
]);

export default function RoutesWrapper() {
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path="/" element={<Layout />} >
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blogs" element={<Blogs />} >
    //       <Route path="blog-details" element={<BlogDetails />} />
    //     </Route>
    //   </Route>
    // </Routes>
  )
}
