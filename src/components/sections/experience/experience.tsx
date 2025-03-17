import { useEffect, useState } from 'react'
import { formerRoles } from '../../../data'
import { ExperiencePost } from '../../../interfaces/interfaces'
import './experience.css'


const Experience: React.FC = () => {

    const [data, setData] = useState<ExperiencePost[]>([])

    useEffect(() => {
        const fetchData = () => {
            const reversedArr: ExperiencePost[] = []
            for (let i = formerRoles.length - 1; i >= 0; i--) {
                reversedArr.push(formerRoles[i])
            }
            setData(reversedArr)
        }
        fetchData()
        return () => fetchData()
    }, [])

    return (
        <section className='experience-section'>
            <h2>Experience</h2>

            <div className='content-container'>

                {data.map((role,index) => (
                    <>
                        <div className='experience-card' key={role.id}>
                            <h3>{role.company}</h3>
                            <p>{role.startDate} - {role.endDate}</p>
                            <p>{role.title}</p>
                        </div>
                        {index !== data.length-1 && (
                            <div className='card-boundary'>
                                <div className='line'></div>
                                <div className='circle'></div>
                                <div className='line'></div>
                            </div>
                        )}
                    </>
                ))}

            </div>
        </section>
    )
}

export default Experience