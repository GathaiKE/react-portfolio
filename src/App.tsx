import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/home"
import MainLayout from "./components/layouts/mainLayout"

const routes = (
  <Route element={<MainLayout />}>
    <Route index element={<Home />} />
  </Route>

)

const router = createBrowserRouter(createRoutesFromElements(routes))

export default router