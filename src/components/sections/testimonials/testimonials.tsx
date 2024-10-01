import "./testimonials.css";
import TestimonialCard from "../../cards/testimonials/testimonialCard";
import { testimonials } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 infinite: true,
//                 dots: true,
//             },
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 initialSlide: 2,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ]
// };

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, 
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Testimonials: React.FC = () => {
    const cards: JSX.Element[] = testimonials.map((testimonial) => {
        return <TestimonialCard key={testimonial.id} testimonial={testimonial} />;
    });
    return (
        <section className="testimonial-section">
            <h2>Kind Words said to me before</h2>
            <div className="testimonial-cards slider-container">
                <Slider {...settings} className="slider">
                    {cards}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
