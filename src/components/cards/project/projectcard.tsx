import { ProjectProps } from '../../../interfaces/interfaces'
import './projectcard.css'

const ProjectCard:React.FC<ProjectProps>=({image}:ProjectProps)=>{
    return (
        <div className='project-card'>
            <img src={image.src} alt={image.title} className='card-img'/>
            <div className='project-card-filler'>
                <p>{image.title}</p>
                <button>See more</button>
            </div>
        </div>
    )
}

export default ProjectCard