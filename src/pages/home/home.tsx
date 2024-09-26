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
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    )
}


export default Home