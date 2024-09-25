import Footer from "../footer"
import Navigation from "../nav"
import { Outlet } from "react-router-dom"

const MainLayout=()=>{
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout