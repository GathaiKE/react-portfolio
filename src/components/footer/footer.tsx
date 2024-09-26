import './footer.css'

const Footer=()=>{

    const year:number = new Date().getFullYear()
    return (
        <footer>
            <small>Copyright &#64; {year}</small>
        </footer>
    )
}

export default Footer