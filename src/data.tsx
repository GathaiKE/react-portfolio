import staffImg from './assets/cintelstaff.png'
import visitorsImg from './assets/cintelcoreams.png'
import realersImg from './assets/cintelcoreams.png'
import zionImg from './assets/zionvalley.png'
import { ProjectImage, Socials, Testimonial } from './interfaces/interfaces'
import cintelcoreLogo from './assets/cintelcore logo.png'
import jituLogo from './assets/the-jitu.png'
import whatsapp from './assets/logos/whatsapp.png'
import gmail from './assets/logos/gmail.png'
import linkedin from './assets/logos/linkedin.png'




    const projectImages:ProjectImage[]=[
        {
            id:"1",
            github:"",
            gradientColor:"",
            liveAddress:"",
            src:staffImg,
            title:"Staff Management System",
            technology:[

            ]
        },
        {
            id:"2",
            github:"",
            gradientColor:"",
            liveAddress:"",
            src:visitorsImg,
            title:"Visitor Traffic Monitoring System",
            technology:[

            ]
        },
        {
            id:"3",
            github:"",
            gradientColor:"",
            liveAddress:"",
            src:zionImg,
            title:"Zion Valley",
            technology:[

            ]
        },
        {
            id:"4",
            github:"",
            gradientColor:"",
            liveAddress:"",
            src:realersImg,
            title:"Realers Real Estate",
            technology:[

            ]
        },
    ]

    const testimonials:Testimonial[]=[
        {
            id:"1",
            logo:jituLogo,
            message:"He was enthusiastic about developing scripts and finding solutions during his internship, and he had a self-driven desire to learn new things. He is fast in understanding instructions and adaptable when the original plan needs to be changed. He is an effective communicator both orally and in writing.",
            companyName:"The Jitu Limited"
        },
        {
            id:"2",
            logo:cintelcoreLogo,
            message:"Working with him has been a truly rewarding experience. On a professional level, he consistently takes initiative, ensuring that all his tasks are completed thoroughly and even going above and beyond to support his teammates in meeting their goals. He has been a standout presence in our team, bringing positivity and earning the admiration of his colleagues",
            companyName:"Cintelcore Limited"
        },
        {
            id:"3",
            logo:"",
            message:"I have seen a strong passion for creating scripts and problem-solving, displaying an eager willingness to learn. He demonstrated a proactive approach to acquiring new knowledge and was quick to grasp instructions. His adaptability shone through whenever adjustments to the initial plan were required",
            companyName:"KPN Technologies",
            name:"George Githaiga",
            position:"Senior Software Developer"
        }
    ]

    const socialApps: Socials[] = [
        {id:"1", icon:whatsapp, name:"whatsapp", address:`https://wa.me/+254712166018`},
        {id:"2", icon:linkedin, name:"linkedin", address:'https://www.linkedin.com/in/gathai-kariuki-061234228/'},
        {id:"3", icon:gmail, name:"gmail",address:"https://mail.google.com/mail/?view=cm&to=gathaikariuki@gmail.com"},
    ]

    const environment = {
        production:true,
        SERVICE_ID :'service_9mpn0zc',
        TEMPLATE_ID:'template_0g4f3j7',
        USER_ID:'NCARLvOpKkomfTivn'
    }

    export {
        projectImages,
        testimonials,
        socialApps,
        environment
    }