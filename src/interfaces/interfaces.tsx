export interface Skill {
    name: string
    bgColor: string
    src: string
    color:string
}

export interface Technology {
    language:string,
    framework:string,
    icon:string
}

export interface ProjectImage{
    id:string
    title: string
    src:string
    gradientColor:string
    github:string
    liveAddress:string
    description:string
    technology:Technology[]
}

export interface ProjectProps {
    image:ProjectImage
}

export interface Testimonial {
    id:string
    logo:string
    message:string
    name?:string 
    position?:string
    companyName?:string
}

export interface TestimonialProps {
    testimonial:Testimonial
}

export interface Socials {
    id:string
    icon:string 
    name:string
    address:string
}

export interface SocialsBtnProps {
    social:Socials
}

export interface SliderProps {
    testimonials:Testimonial[]
}


export interface EmailJsResponse {
    error?:unknown
    status: number
    statusText:string
    message:string
}