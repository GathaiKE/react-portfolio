import img from '../../../assets/hero.png'
import linkedin from '../../../assets/logos/linkedin_dark.png'
import github from '../../../assets/logos/github.png'
import './hero.css'

const Hero=()=>{
    return (
        <section className='hero--container'>
                <div className='hero-content'>
                    <span>
                        <span className='heading-container'>
                            <span className='name-text'><span className='static-text'>Hi, I am </span><span className='dynamic-text'>Brian Gathai.</span>
                            </span>
                            <span className='career-text'><span className='static-text'>I'm a </span><span className='dynamic-text'>Software Developer.</span>
                            </span>
                        </span>
                    </span>
                    <span className='pitch-section'>
                        <p>Looking to turn the lights on in your world, you're in the right place. Talk to me and lets make magic together.</p>
                        <span className='pitch-logos'>
                            <img src={github} alt="Github logo" />
                            <img src={linkedin} alt="linkedin logo" />
                        </span>
                        <span className='buttons-container'>
                            <button className='explore-btn'>Explore</button>
                            <button className='contact-btn'>Contact Me</button>
                        </span>
                    </span>
                </div>
                <div className='hero-img'><img src={img}/></div>
            </section>
    )
}

export default Hero