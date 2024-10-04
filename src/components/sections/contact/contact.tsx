import { ActionFunctionArgs, Form } from 'react-router-dom'
import './contact.css'
import { environment, socialApps } from '../../../data'
import { useEffect, useState } from 'react'
import { Socials } from '../../../interfaces/interfaces'
import SocialsBtn from '../../socialsBtn/socialsBtn'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'


// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({request}:ActionFunctionArgs)=>{
    const formData = await request.formData()

    const name:string = formData.get('name') as string
    const email:string = formData.get('email') as string
    const message:string = formData.get('message') as string

    const service_id:string= environment.SERVICE_ID
    const template_id:string = environment.TEMPLATE_ID
    const user_id:string = environment.USER_ID

    const data = {
        from_name:name,
        to_name: "Brian Gathai",
        subject: "Portfolio contact",
        message:message,
        response_address:email
    }

    try {
        const result:EmailJSResponseStatus = await emailjs.send(service_id, template_id, data,user_id)
        return {
            status:result.status,
            statusText: result.text,
            message:"Your message was received and will ve responded to as soon as possible"
        }
    } catch (error:unknown) {
        return {
            error:error,
            status: 403,
            message:"Failed to send the text"
        }
    }
}

const Contact:React.FC = ()=>{

    const [socials, setSocials] = useState<Socials[]>([])

    useEffect(()=>setSocials(socialApps), [])

    const contactApps:React.JSX.Element[] = socials.map(app=>{
        return <SocialsBtn social={app} key={app.id} />
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