import './mainLayout.css'
import Footer from "../footer"
import Navigation from "../navigation/nav"
import { Outlet } from "react-router-dom"

const MainLayout=()=>{
    return (
        <div className="mail-layout--container">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout