import "./testimonials.css";
import TestimonialCard from "../../cards/testimonials/testimonialCard";
import { testimonials } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";

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
                    modules={[Pagination]}
                    slidesPerView={3}
                    pagination={{
                        el: '.swiper-pagination',clickable:true
                    }}
                    breakpoints={{
                        1024:{
                            slidesPerView:3
                        },
                        768:{
                            slidesPerView:2
                        },
                        0:{
                            slidesPerView:1
                        }
                    }}
                >
                    {cards}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
