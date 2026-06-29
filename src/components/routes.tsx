import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from '../modules/home'
import About from '../modules/about'

// const router = createBrowserRouter([
//   {    path: "/",    element: <Home/>  },
//   {    path: "/about",    element: <About/>  },
// ]);

export default function RoutesWrapper() {
  return (
    //  <RouterProvider router={router} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

    </Routes>


  )
}
