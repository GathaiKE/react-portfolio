import img from '../../../assets/hero.png'
import { useEffect, useState } from 'react'
import './hero.css'

const Hero=()=>{

    const [showName, setShowName] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setShowName(prev=>!prev)
        }, 2000)

        return ()=> clearTimeout(timer)
    }, [showName])

    return (
        <section className='hero--container'>
                <div className='hero-content'>
                    <span>
                        <h1>Hi,</h1>
                        <h1 >I am <span className={showName?"fade":"fade fade-out"}>{showName?"Brian Gathai.":"a software developer."}</span></h1>
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