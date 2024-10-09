import { Link } from 'react-scroll';
import './nav.css'
import { useState } from 'react';
import homeIcon from '../../assets/icons/home.png'
import aboutIcon from '../../assets/icons/about.png'
import testimonialIcon from '../../assets/icons/testimonial.png'
import projectsIcon from '../../assets/icons/projects.png'
import contactIcon from '../../assets/icons/contact.png'
import experienceIcon from '../../assets/icons/experience.png'

const Navigation = () => {
const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu=()=>{
        setOpenMenu(val=>!val)
    }

    return (
        <>
            <nav className='home-nav' >
                <Link to="hero" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>home</Link>
                <Link to="about" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>about</Link>
                <Link to="experience" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>experience</Link>
                <Link to="projects" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>projects</Link>
                <Link to="testimonials" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>testimonials</Link>
                <Link to="contact" smooth={true} spy={true} className='home-nav--link' activeClass='home-nav--link-active'>contact</Link>
            </nav>

            <nav className='mobile-nav'>
                <div className={`hamburger ${openMenu?"open-burger":"close-burger"}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={`menu ${openMenu?"menu-open":"menu-close"}`}>
                    <Link 
                        to="hero" 
                        smooth={true}
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={homeIcon} className='nav-icon' alt='home icon'/> 
                        home</Link>
                    <Link 
                        to="about" 
                        smooth={true} 
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={aboutIcon} className='nav-icon' alt='about icon'/> 
                        about</Link>
                    <Link 
                        to="experience" 
                        smooth={true} 
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={experienceIcon} className='nav-icon' alt='experience icon'/> 
                        experience</Link>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={projectsIcon} className='nav-icon' alt='projects icon'/> 
                        projects</Link>
                    <Link 
                        to="testimonials" 
                        smooth={true} 
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={testimonialIcon} className='nav-icon' alt='testimonials icon'/> 
                        testimonials</Link>
                    <Link 
                        to="contact" 
                        smooth={true} 
                        spy={true}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={contactIcon} className='nav-icon' alt='contact icon'/> 
                        contact</Link>
                </span>
            </nav>

        </>
    )
}

export default Navigation