import { ProjectProps } from '../../../interfaces/interfaces'
import './projectcard.css'
import githubIcon from '../../../assets/logos/github.png'

const ProjectCard:React.FC<ProjectProps>=({image}:ProjectProps)=>{

    const images:JSX.Element[] = image.technology.map(tech=>{
        return (
            <div className='project-technologies' key={tech.icon}>
                <img src={tech.icon} />
                <small>{tech.framework?tech.framework:tech.language}</small>
            </div>
        )
    })

    const handleClick=()=>{
        window.open(image.github, '_blank');
    }


    return (
        <div className='project-card'>
            <img src={image.src} alt={image.title} className='card-img'/>
            <div className='project-card-details'>
                <p>{image.title}</p>
                <div className="tech-container">
                    {images}
                </div>
                <small>{image.description}</small>
                <button onClick={handleClick}><img src={githubIcon} alt='github'/></button>
            </div>
        </div>
    )
}

export default ProjectCard