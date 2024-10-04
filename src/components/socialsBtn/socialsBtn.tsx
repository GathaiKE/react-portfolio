import './socialsBtn.css'
import whatsappIcon from '../../assets/logos/whatsapp.png' 
import linkedinIcon from '../../assets/logos/linkedin.png' 
import gmailIcon from '../../assets/logos/gmail.png' 
import { SocialsBtnProps } from '../../interfaces/interfaces'


const SocialsBtn:React.FC<SocialsBtnProps> =( {social}:SocialsBtnProps)=>{
    
    let icon:string=''

    switch (true){
        case social.name === 'gmail':
            icon = gmailIcon
            break;
        default:
            icon = social.name === 'whatsapp'?whatsappIcon:linkedinIcon
        break;
    }


    const handleClick=()=>{
        window.open(social.address, '_blank');
    }

    return (
        <>
            <button aria-label={social.name} className='btn' onClick={handleClick}>
                <img src={icon} alt={social.name} />
            </button>
        </>
    )
}

export default SocialsBtn