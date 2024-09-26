import './testimonials.css'
import TestimonialCard from '../../cards/testimonials/testimonialCard'
import { testimonials } from '../../../data'



const Testimonials:React.FC=()=>{


    const cards: JSX.Element[] = testimonials.map(testimonial=>{
        return <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
    })
    return (
        <section className='testimonial-section'>
            <h2>Kind Words said to me before</h2>
            <div className='testimonial-cards'>
                {cards}
            </div>
        </section>
    )
}

export default Testimonials