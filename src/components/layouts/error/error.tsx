import { useRouteError } from "react-router-dom"
import Navigation from "../../navigation/nav"
import Footer from "../../footer/footer"
import './error.css'
import { RouteError } from "../../../interfaces/interfaces"

const ErrorElement=()=>{
    const error:RouteError = useRouteError() as RouteError
    return (
        <div className="mail-layout--container">
            <Navigation />
                <main>
                    <p>{error.error?.message}</p>
                    <p>{error.status}</p>
                    <p>{error.statusText}</p>
                    <p>{error.data}</p>
                </main>
            <Footer />
    </div>
    )
}

export default ErrorElement