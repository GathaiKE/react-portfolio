import './experience.css'

const Experience:React.FC=()=>{
    return (
        <section className='experience-section'>
            <h2>Experience</h2>

            <div className='content-container'>
                <div className='experience-card'>
                    <h3>Cintelcore Ltd</h3>
                    <p>January 2024 - August 2024</p>
                    <p>Software Developer</p>
                </div>
                <div className='card-boundary'>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <div className='line'></div>
                </div>
                <div className='experience-card'>
                    <h3>The Jitu</h3>
                    <p>April 2023 - June 2023</p>
                    <p>Software Developer(Intern)</p>
                </div>
            </div>
        </section>
    )
}

export default Experience