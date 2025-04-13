import staffImg from './assets/cintelstaff.png'
import visitorsImg from './assets/cintelcoreams.png'
import realersImg from './assets/realers.png'
import zionImg from './assets/zionvalley.png'
import { ExperiencePost, ProjectImage, Socials, Testimonial } from './interfaces/interfaces'
import cintelcoreLogo from './assets/cintelcore logo.png'
// import shujaa_mzalendoImg from './assets/shujaa_mzalendo.jpeg'
import jituLogo from './assets/the-jitu.png'
import whatsapp from './assets/logos/whatsapp.png'
import gmail from './assets/logos/gmail.png'
import linkedin from './assets/logos/linkedin.png'
import AfricodeSolutionsLogo from './assets/africode_logo.svg'

// Framework icons
import figmaIcon from './assets/skills/figma.svg'
import angularIcon from './assets/skills/angular.svg'
import reactIcon from './assets/skills/react.svg'
import nodeIcon from './assets/skills/node.svg'
import djangoIcon from './assets/skills/django.svg'
import mongoIcon from './assets/skills/mongodb.svg'
import mysqlOcon from './assets/skills/mysql.svg'
import postgresIcon from './assets/skills/postgresql.svg'
import phpIcon from './assets/skills/php.svg'
import firebaseIcon from './assets/skills/firebase.svg'
import rabbitMQ from './assets/skills/rabbitmq.svg'



const projectImages: ProjectImage[] = [
    {
        id: "1",
        github: "https://github.com/GathaiKE/staff_management_system",
        gradientColor: "",
        liveAddress: "",
        src: staffImg,
        title: "Staff Management System",
        technology: [
            { framework: "Angular", icon: angularIcon, language: "Typescript" },
            { framework: "Figma", icon: figmaIcon, language: "" },
            { framework: "Django", icon: djangoIcon, language: "Python" },
            { framework: "Postgres", icon: postgresIcon, language: "SQL" }
        ],
        description: "A multi-platform system that helps automate most of the Human Resource staffing activities."
    },
    {
        id: "2",
        github: "https://github.com/GathaiKE/visitor_management_system",
        gradientColor: "",
        liveAddress: "",
        src: visitorsImg,
        title: "Visitor Traffic Monitoring System",
        technology: [
            { framework: "Angular", icon: angularIcon, language: "Typescript" },
            { framework: "Figma", icon: figmaIcon, language: "" },
            { framework: "Django", icon: djangoIcon, language: "Python" },
            { framework: "Postgres", icon: postgresIcon, language: "SQL" }
        ],
        description: "This is s system that works to collect and track information of people coming in and out via a building's access points."
    },
    {
        id: "3",
        github: "https://github.com/GathaiKE/Realers",
        gradientColor: "",
        liveAddress: "",
        src: realersImg,
        title: "Realers Real Estate",
        technology: [
            { framework: "PHP", icon: phpIcon, language: "PHP" },
            { framework: "Figma", icon: figmaIcon, language: "" },
            { framework: "MySQL", icon: mysqlOcon, language: "MySQL" }
        ],
        description: "This is a concept project that is attempts to display an approach at bridging the gap between real estate agencies and tenants."
    },
    {
        id: "4",
        github: "https://github.com/GathaiKE/Zion-Valley",
        gradientColor: "",
        liveAddress: "",
        src: zionImg,
        title: "Zion Valley",
        technology: [
            { framework: "React", icon: reactIcon, language: "Javascript" },
            { framework: "Figma", icon: figmaIcon, language: "" },
            { framework: "Node", icon: nodeIcon, language: "Typescript" },
            { framework: "Mongo DB", icon: mongoIcon, language: "NoSQL" }
        ],
        description: "This website is a medium for clients to register as members of a charity organization that aims to allow members to reap benefits after donating their land for use as camping sites."
    },
    // {
    //     id: "5",
    //     github: "https://github.com/GathaiKE/shujaa_mzalendo",
    //     gradientColor: "",
    //     liveAddress: "",
    //     src: shujaa_mzalendoImg,
    //     title: "Shujaa Mzalendo",
    //     technology: [
    //         { framework: "Figma", icon: figmaIcon, language: "" },
    //         { framework: "React", icon: reactIcon, language: "Javascript" },
    //         { framework: "Firebase", icon: firebaseIcon, language: "" }
    //     ],
    //     description: "This website is a tribute to Kenyans who died on 25th June 2024 while exercising their constitutional rights in the #RejectFinanceBill2024 demonstrations."
    // },
    {
        id: "6",
        github: "https://github.com/GathaiKE/Healthcare-Appointment-Scheduling-System",
        gradientColor: "",
        liveAddress: "",
        src: AfricodeSolutionsLogo,
        title: "Africode Solutions",
        technology: [
            { framework: "Figma", icon: figmaIcon, language: "" },
            { framework: "React", icon: reactIcon, language: "Javascript" },
            { framework: "Firebase", icon: firebaseIcon, language: "" }
        ],
        description: "This is the home web page of a software development agency operating from Nairobi Kenya to give the agency an online prescence and list the products that they offer.",
        current: true
    },
    {
        id: "7",
        github: "https://github.com/GathaiKE/Healthcare-Appointment-Scheduling-System",
        gradientColor: "",
        liveAddress: "",
        src: "",
        title: "Healthcare Appointment Scheduling System",
        technology: [
            { framework: "Django", icon: djangoIcon, language: "python" },
            { framework: "Postgres", icon: postgresIcon, language: "sql" },
            { framework: "RabbitMQ", icon: rabbitMQ, language: "" }
        ],
        description: "A high performance booking api system that sets and tracks appointments between doctors and patients with the relevant medical records.",
        current: true
    }
]

const testimonials: Testimonial[] = [
    {
        id: "1",
        logo: jituLogo,
        message: "He was enthusiastic about developing scripts and finding solutions during his internship, and he had a self-driven desire to learn new things. He is fast in understanding instructions and adaptable when the original plan needs to be changed. He is an effective communicator both orally and in writing.",
        companyName: "The Jitu Limited"
    },
    {
        id: "2",
        logo: cintelcoreLogo,
        message: "Working with him has been a truly rewarding experience. On a professional level, he consistently takes initiative, ensuring that all his tasks are completed thoroughly and even going above and beyond to support his teammates in meeting their goals. He has been a standout presence in our team, bringing positivity and earning the admiration of his colleagues",
        companyName: "Cintelcore Limited"
    },
    {
        id: "3",
        logo: "",
        message: "I have seen a strong passion for creating scripts and problem-solving, displaying an eager willingness to learn. He demonstrated a proactive approach to acquiring new knowledge and was quick to grasp instructions. His adaptability shone through whenever adjustments to the initial plan were required",
        companyName: "KPN Technologies",
        name: "George Githaiga",
        position: "Senior Software Developer"
    }
]

const socialApps: Socials[] = [
    { id: "1", icon: whatsapp, name: "whatsapp", address: `https://wa.me/+254712166018` },
    { id: "2", icon: linkedin, name: "linkedin", address: 'https://www.linkedin.com/in/gathai-kariuki-061234228/' },
    { id: "3", icon: gmail, name: "gmail", address: "https://mail.google.com/mail/?view=cm&to=gathaikariuki@gmail.com" },
]

const environment = {
    production: true,
    SERVICE_ID: 'service_9mpn0zc',
    TEMPLATE_ID: 'template_0g4f3j7',
    USER_ID: 'NCARLvOpKkomfTivn'
}


const formerRoles: ExperiencePost[] = [
    {
        id: "1",
        company: "The Jitu",
        startDate: "April 2023",
        endDate: "June 2023",
        title:"Software Developer(Intern)"
    },
    {
        id: "2",
        company: "Cintelcore Ltd",
        startDate: "January 2024",
        endDate: "August 2024",
        title: "Software Developer"
    },
    {
        id: "3",
        company: "Epicapp",
        startDate: "October 2024",
        endDate: "February 2025",
        title: "Software Developer"
    }
]

export {
    projectImages,
    testimonials,
    socialApps,
    environment,
    formerRoles
}