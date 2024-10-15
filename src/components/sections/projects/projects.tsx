import './projects.css'
import ProjectCard from '../../cards/project/projectcard'
import { useEffect, useState } from 'react'
import { ProjectImage } from '../../../interfaces/interfaces'
import { projectImages } from '../../../data'



const Projects:React.FC=()=>{

    const [images, setImages] = useState<ProjectImage[]>([])
    const [showAllProjects, setShowAllProjects] = useState<boolean>(false)

    useEffect(()=>{
        const sortedProjects: ProjectImage[] = projectImages.slice()
        const currentIndex: number = sortedProjects.findIndex(project => project.current)
        const currentProject:ProjectImage = sortedProjects[currentIndex]
        sortedProjects.splice(currentIndex, 1)
        sortedProjects.unshift(currentProject)
        if(showAllProjects){
            setImages(sortedProjects)
        } else {
            setImages(sortedProjects.slice(0, 3))
        }
    }, [showAllProjects])

    const handleShowProjects:VoidFunction=()=>{
        setShowAllProjects(prev=>!prev)
    }

    const cards:JSX.Element[] = images.map(image=>{
            return <ProjectCard key={image?.id} image={image}/>
        })
    return (
        <section className='projects-section'>
            <h2>Some of my contributions</h2>
            <div className='project-cards'>
                {cards}
            </div>
            <small onClick={handleShowProjects}>{showAllProjects?"View less":"View more"}</small>
        </section>
    )
}

export default Projects