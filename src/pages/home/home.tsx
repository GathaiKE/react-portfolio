import About from '../../components/sections/about/about'
import Contact from '../../components/sections/contact/contact'
import Experience from '../../components/sections/experience/experience'
import Hero from '../../components/sections/hero/hero'
import Projects from '../../components/sections/projects/projects'
import Skills from '../../components/sections/skills/skills'
import Testimonials from '../../components/sections/testimonials/testimonials'
import './home.css'

const Home = ()=>{
    return (
        <div className='home-container'>
            <section className="section" id='hero'>
                <Hero />
            </section>
            <section className="section" id='about'>
                <About />
            </section>
            <section className="section" id='skills'>
                <Skills />
            </section>
            <section className="section" id='experience'>
                <Experience />
            </section>
            <section className="section" id='projects'>
                <Projects />
            </section>
            <section className="section" id='testimonials'>
                <Testimonials />
            </section>
            <section className="section" id='contact'>
                <Contact />
            </section>
        </div>
    )
}


export default Home