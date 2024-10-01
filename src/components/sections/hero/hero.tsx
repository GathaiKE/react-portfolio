import img from '../../../assets/hero.png'
import './hero.css'

const Hero=()=>{
    return (
        <section className='hero--container'>
                <div className='hero-content'>
                    <span>
                        <span className='heading-container'>
                            <span className='static-text'>Hi, I am</span>
                            <ul className='dynamic-text'>
                                <li><span>Brian Gathai.</span></li>
                                <li><span>a software developer.</span></li>
                            </ul>
                        </span>
                    </span>
                    <span className='pitch-section'>
                        <p>Looking to turn the lights on in your world, you're in the right place. Talk to me and lets make magic together.</p>
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