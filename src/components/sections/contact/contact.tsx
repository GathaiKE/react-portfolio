import { ActionFunctionArgs, Form, Navigation, useActionData, useNavigation } from 'react-router-dom'
import './contact.css'
import { environment, socialApps } from '../../../data'
import { useEffect, useRef, useState } from 'react'
import { EmailJsResponse, Socials } from '../../../interfaces/interfaces'
import SocialsBtn from '../../socialsBtn/socialsBtn'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import ok from '../../../assets/icons/ok.png'
import failed from '../../../assets/icons/failed.png'


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
        message:message,
        response_address:email
    }

    try {
        const result:EmailJSResponseStatus = await emailjs.send(service_id, template_id, data,user_id)
        const response:EmailJsResponse = {
            status:result.status,
            statusText: result.text,
            message:"Message sent"
        }

        return response
    } catch (error:unknown) {

        const err:EmailJsResponse = {
            error:error,
            status: 403,
            statusText:"Failed to send the text",
            message:"Failed: Please try again"
        }
        return err
    }
}

const Contact:React.FC = ()=>{ 
    const [socials, setSocials] = useState<Socials[]>([])
    const response:EmailJsResponse = useActionData() as EmailJsResponse
    const navigation:Navigation = useNavigation()
    const formRef = useRef<HTMLFormElement>(null)
    useEffect(()=> {
        if(response?.status === 200 && formRef.current){
            formRef.current.reset()
        }
    }, [response])

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
            <Form method='post'className='form' ref={formRef}>
                {(response && response.status === 200) && <small  className='success'><img src={ok} alt="success icon"/>Message was sent</small>}
                {(response && response.status === 403) && <small className='fail'><img src={failed} alt="failure icon"/>Failed: Please try again</small>}
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

                <button>
                    {navigation.state === 'idle' && "Send"}
                    {navigation.state === 'submitting' && <div className='ellipsis-container'>
                        <div className='ellipsis'></div>
                        <div className='ellipsis'></div>
                        <div className='ellipsis'></div>
                    </div>}
                </button>
            </Form>
        </section>
    )
}


export default Contact