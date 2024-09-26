import { Form } from 'react-router-dom'
import './contact.css'
import { socialApps } from '../../../data'
import { useEffect, useState } from 'react'
import { Socials } from '../../../interfaces/interfaces'


const Contact:React.FC = ()=>{

    const [socials, setSocials] = useState<Socials[]>([])

    useEffect(()=>setSocials(socialApps), [])

    const contactApps:React.JSX.Element[] = socials.map(app=>{
        return <img src={app.icon} alt={app.name} key={app.id} />
    })
    return (
        <section className='contact-section'>
            <h2>Send Me a Message</h2>
            <div className='contact-container'>
                <h3>Send Me a 👋 through</h3>
                <div className='contact-apps'>
                    {contactApps}
                </div>
            </div>
            <Form method='post'className='form'>
                <div>
                    <label>
                        Name
                        <input name='name'/>
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input name='email'/>
                    </label>
                </div>
                <div>
                    <label>
                        Message
                        <textarea name='message'></textarea>
                    </label>
                </div>

                <button>Send</button>
            </Form>
        </section>
    )
}


export default Contact