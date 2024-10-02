import { Link } from 'react-scroll';
import './nav.css'
import home from '../../assets/icons/home.png'
import about from '../../assets/icons/about.png'
import testimonial from '../../assets/icons/testimonial.png'
import projects from '../../assets/icons/projects.png'
import skills from '../../assets/icons/skills.png'
import contact from '../../assets/icons/contact.png'


const Navigation = ()=>{
    return (
        <>
            <nav className='home-nav'>
                <Link to="home" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>home</Link>
                <Link to="about" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>about</Link>
                <Link to="skills" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>my skills</Link>
                <Link to="projects" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>projects</Link>
                <Link to="testimonials" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>testimonials</Link>
                <Link to="contact" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>contact</Link>
            </nav>
            <nav className='mobile-nav'>
                <Link to="home" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={home} alt="home" />
                </Link>
                <Link to="about" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={about} alt="about" />
                </Link>
                <Link to="skills" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={skills} alt="my skills" />
                </Link>
                <Link to="projects" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={projects} alt="projects" />
                </Link>
                <Link to="testimonials" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={testimonial} alt="testimonials" />
                </Link>
                <Link to="contact" smooth={true} className='home-nav--link' activeClass='.home-nav--link-active'>
                    <img src={contact} alt="contact" />
                </Link>
            </nav>
        </>
    )
}

export default Navigation