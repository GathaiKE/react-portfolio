import { TestimonialProps } from '../../../interfaces/interfaces'
import './testimonialCard.css'

const TestimonialCard:React.FC<TestimonialProps>=({testimonial}:TestimonialProps)=>{
    return (
        <div className='testimonial-card'>
            <div className='testimonial-card-header'>
                {testimonial.logo !== "" && <img src={testimonial.logo} alt={testimonial.companyName} className='testimonial-logo'/>}
                {(testimonial.name && testimonial.position && testimonial.companyName) && 
                    <div className='testimonial-names'>
                        {testimonial.name && <h3>{testimonial.name}</h3>}
                        {testimonial.position && <small>{testimonial.position}</small>}
                        {testimonial.companyName &&<small>{testimonial.companyName}</small>}
                    </div>}
            </div>
            <p>{testimonial.message}</p>
        </div>
    )
}

export default TestimonialCard