import { useRouteError } from "react-router-dom"
import Navigation from "../../navigation/nav"
import Footer from "../../footer/footer"
import './error.css'

const ErrorElement=()=>{
    const error = useRouteError()
    console.log("Error:",error)
    return (
        <div className="mail-layout--container">
            <Navigation />
                <main>
                    <p>Error occured</p>
                </main>
            <Footer />
    </div>
    )
}

export default ErrorElement