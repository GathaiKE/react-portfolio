import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/home/home"
import MainLayout from "./components/layouts/main/mainLayout"
import './App.css'
import ErrorElement from "./components/layouts/error/error"
import { action } from "./components/sections/contact/contact"

const routes = (
  <Route element={<MainLayout />} errorElement={<ErrorElement />}>
    <Route index element={<Home />} action={action}/>
  </Route>

)

const router = createBrowserRouter(createRoutesFromElements(routes))

export default router