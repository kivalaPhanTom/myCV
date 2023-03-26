import React from 'react'
import styles from './Contact.module.scss'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineGooglePlus} from "react-icons/ai";
import TitleSection from '../TitleSection/TitleSection';
import {useSelector } from 'react-redux';

function Contact() {
  const phoneNumber = useSelector((state:{CVSlice:{phoneNumber:string}})=> state.CVSlice.phoneNumber)
  const email = useSelector((state:{CVSlice:{email:string}})=> state.CVSlice.email)
  const handleRedirect =(value:string)=>{
    window.open(value, '_blank');
  }
  return (
     <div className={styles['contactContainer']}>
        <TitleSection title1 ='Contact' title2='me'/>
        <div className={styles['contactContent']}>
            <div className={styles['social']}>
                <div className={styles['listSocial']}>
                    <AiOutlineFacebook 
                        id={styles['iconFB']} 
                        className={styles['iconSocial']}
                        onClick ={()=>handleRedirect('https://www.facebook.com/duydinhnguyen99/')}
                    />
                    <AiOutlineInstagram  
                        id={styles['iconInsta']} 
                        className={styles['iconSocial']}
                        onClick ={()=>handleRedirect('https://www.instagram.com/duydinhnguyen99/')}
                    />   
                    <AiOutlineGithub 
                        id={styles['iconGit']} 
                        className={styles['iconSocial']} 
                        onClick ={()=>handleRedirect('https://github.com/kivalaPhanTom')}
                    /> 
                    {/* <AiOutlineTwitter 
                        id={styles['iconTwiter']} 
                        className={styles['iconSocial']}
                    /> */}
                </div>
               <div className={styles['phone']}>
                  <p>Phone: <span className={styles['myPhoneNumber']}>{phoneNumber}</span></p>
                  <div className={styles['divGmail']}>
                    <AiOutlineGooglePlus id={styles['iconGG']} className={styles['iconSocial']}/>
                     <p>{email}</p>
                  </div>
               </div>
            </div>
            
        </div>
    </div>
  )
}


export default Contact
