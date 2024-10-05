import { Link } from 'react-scroll';
import './nav.css'
import { useState } from 'react';

const Navigation = () => {
const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu=()=>{
        setOpenMenu(val=>!val)
    }

    return (
        <>
            <nav className='home-nav' >
                <Link to="home" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>home</Link>
                <Link to="about" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>about</Link>
                <Link to="skills" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>my skills</Link>
                <Link to="projects" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>projects</Link>
                <Link to="testimonials" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>testimonials</Link>
                <Link to="contact" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>contact</Link>
            </nav>

            <nav className='mobile-nav'>
                <div className={`hamburger ${openMenu?"open-burger":"close-burger"}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={`menu ${openMenu?"menu-open":"menu-close"}`}>
                    <Link 
                        to="home" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        home</Link>
                    <Link 
                        to="about" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        about</Link>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        my skills</Link>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        projects</Link>
                    <Link 
                        to="testimonials" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        testimonials</Link>
                    <Link 
                        to="contact" 
                        smooth={true} 
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        contact</Link>
                </span>
            </nav>

        </>
    )
}

export default Navigation