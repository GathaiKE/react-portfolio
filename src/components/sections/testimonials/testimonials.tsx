import "./testimonials.css";
import TestimonialCard from "../../cards/testimonials/testimonialCard";
import { testimonials } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials: React.FC = () => {
    const cards: JSX.Element[] = testimonials.map((testimonial) => {
        return (
            <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
        );
    });
    return (
        <section className="testimonial-section">
            <h2>Kind Words said to me before</h2>
            <div className="testimonial-cards slider-container">
                <Swiper
                    slidesPerView={3}
                    breakpoints={{
                        1024:{
                            slidesPerView:3
                        },
                        768:{
                            slidesPerView:2
                        },
                        435:{
                            slidesPerView:1
                        }
                    }}
                >
                    {cards}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
