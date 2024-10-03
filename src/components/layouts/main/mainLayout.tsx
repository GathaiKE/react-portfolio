import './mainLayout.css'
import Footer from '../../footer/footer'
import Navigation from '../../navigation/nav'
import { Outlet } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react'

const MainLayout=()=>{
    return (
        <div className="mail-layout--container">
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Analytics />
        </div>
    )
}

export default MainLayout