import { Link } from 'react-scroll';
import './nav.css'


const Navigation = ()=>{
    return (
        <nav className='home-nav'>
            <Link to="home" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>home</Link>
            <Link to="about" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>about</Link>
            <Link to="skills" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>my skills</Link>
            <Link to="projects" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>projects</Link>
            <Link to="testimonials" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>testimonials</Link>
            <Link to="contact" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>contact</Link>
        </nav>
    )
}

export default Navigation