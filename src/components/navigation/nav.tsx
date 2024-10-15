import { Link } from 'react-scroll';
import './nav.css'
import { useEffect, useRef, useState } from 'react';
import homeIcon from '../../assets/icons/home.png'
import aboutIcon from '../../assets/icons/about.png'
import testimonialIcon from '../../assets/icons/testimonial.png'
import projectsIcon from '../../assets/icons/projects.png'
import contactIcon from '../../assets/icons/contact.png'
import experienceIcon from '../../assets/icons/experience.png'

const Navigation = () => {
const [openMenu, setOpenMenu] = useState({isOpen:false, onLaunch:true})
const menuRef:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

const touchStart: React.MutableRefObject<number>  = useRef(0)
const touchEnd: React.MutableRefObject<number> = useRef(0)

const handleTouchStart=(e:TouchEvent)=> touchStart.current = e.changedTouches[0].screenX
const handleTouchEnd=()=> {
    if(touchStart.current - touchEnd.current > 50){
        setOpenMenu({onLaunch:false, isOpen:false})
    } else if(touchEnd.current - touchStart.current > 50){
        setOpenMenu({onLaunch:false, isOpen:true})
    }
}

const handleTouchMove=(e:TouchEvent)=> touchEnd.current = e.changedTouches[0].screenX

useEffect(()=>{
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    return ()=>{
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
    }
},[])


useEffect(()=>{
    const handleChange=(e:MouseEvent)=>{
        if(openMenu.isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)){
            setOpenMenu(val=>({onLaunch:false, isOpen:!val.isOpen}))
        }
    }

    document.addEventListener('mousedown', handleChange)

    return ()=> document.removeEventListener('mousedown', handleChange)
}, [openMenu.isOpen])

    const toggleMenu=(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        e.preventDefault();
        setOpenMenu(val=>({onLaunch:false, isOpen:!val.isOpen}))
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

            <nav className='mobile-nav' ref={menuRef}>
                <div className={`hamburger ${(openMenu.isOpen)?"open-burger":`${!openMenu.onLaunch?"close-burger":""}`}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={`menu ${openMenu.isOpen?"menu-open":`${!openMenu.onLaunch?"menu-close":""}`}`}>
                    <Link 
                        to="hero" 
                        smooth={true}
                        spy={true}
                        onClick={()=>toggleMenu}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={homeIcon} className='nav-icon' alt='home icon'/> 
                        home</Link>
                    <Link 
                        to="about" 
                        smooth={true} 
                        spy={true}
                        onClick={()=>toggleMenu}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={aboutIcon} className='nav-icon' alt='about icon'/> 
                        about</Link>
                    <Link 
                        to="experience" 
                        smooth={true} 
                        spy={true}
                        onClick={()=>toggleMenu}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={experienceIcon} className='nav-icon' alt='experience icon'/> 
                        experience</Link>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        spy={true}
                        onClick={()=>toggleMenu}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={projectsIcon} className='nav-icon' alt='projects icon'/> 
                        projects</Link>
                    <Link 
                        to="testimonials" 
                        smooth={true} 
                        spy={true}
                        onClick={()=>toggleMenu}
                        className='mobile-link'
                        activeClass='mobile-link-active'
                    >
                        <img src={testimonialIcon} className='nav-icon' alt='testimonials icon'/> 
                        testimonials</Link>
                    <Link 
                        to="contact" 
                        smooth={true} 
                        spy={true}
                        onClick={()=>toggleMenu}
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