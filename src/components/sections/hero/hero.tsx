import img from '../../../assets/hero.png'
import linkedin from '../../../assets/logos/linkedin_dark.png'
import github from '../../../assets/logos/github.png'
import resumeIcon from "../../../assets/icons/resume.svg"
import resume from "../../../assets/brian_gathai_resume.pdf"
import './hero.css'
import { Link } from 'react-scroll'

const Hero=()=>{

    const handleClick=(link:string)=>{
        window.open(link, '_blank')
    }
    return (
        <section className='hero--container'>
                <div className='hero-content'>
                    <span>
                        <span className='heading-container'>
                            <span className='name-text'><span className='static-text'>Hi, I am </span><span className='dynamic-text'>Brian Gathai.</span>
                            </span>
                            <span className='career-text'><span className='static-text'>I'm a </span><span className='dynamic-text'> Software Developer.</span>
                            </span>
                        </span>
                    </span>
                    <span className='pitch-section'>
                        <p>Looking to turn the lights on in your world, you're in the right place. Talk to me and lets make magic together.</p>
                        <span className='pitch-logos'>
                            <img src={github} alt="Github logo" onClick={()=>handleClick('https://github.com/GathaiKE')}/>
                            <img src={linkedin} alt="linkedin logo" onClick={()=>handleClick('https://www.linkedin.com/in/gathai-kariuki-061234228/')}/>
                            <img src={resumeIcon} alt="linkedin logo" onClick={()=>handleClick(resume)}/>
                            {/* <img src={resumeIcon} alt="Resume logo" onClick={downloadResume}/> */}
                        </span>
                        <span className='buttons-container'>
                            <button className='explore-btn'><Link to='about' smooth={true} className='nav-to'>Explore</Link></button>
                            <button className='contact-btn'><Link to='contact' smooth={true} className='nav-to'>Contact</Link></button>
                        </span>
                    </span>
                </div>
                <div className='hero-img'><img src={img}/></div>
            </section>
    )
}

export default Hero