import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Homepage from './sections/Homepage'
import Explore from './sections/Explore'
import About from './sections/About'
import Login from './sections/Login'
import SignUp from './sections/SignUp'
import RootLayout from './sections/RootLayout'


const routes = createRoutesFromElements([
  <Route path="/" element={<RootLayout />}>,
  <Route index element={<Homepage />} />,
  <Route path="explore" element={<Explore />} />,
  <Route path="about" element={<About />} />,
  <Route path="login" element={<Login />} />,
  <Route path="signup" element={<SignUp />} />,
  </Route>
])

const router = createBrowserRouter(routes)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App