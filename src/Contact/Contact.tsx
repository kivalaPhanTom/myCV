import React from 'react'
import styles from './Contact.module.scss'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineGooglePlus} from "react-icons/ai";
import TitleSection from '../TitleSection/TitleSection';
import {useSelector } from 'react-redux';

function Contact() {
  const phoneNumber = useSelector((state:{CVSlice:{phoneNumber:string}})=> state.CVSlice.phoneNumber)
  const email = useSelector((state:{CVSlice:{email:string}})=> state.CVSlice.email)
  return (
     <div className={styles['contactContainer']}>
        <TitleSection title1 ='Contact' title2='me'/>
        <div className={styles['contactContent']}>
            <div className={styles['social']}>
                <div className={styles['listSocial']}>
                    <AiOutlineFacebook id={styles['iconFB']} className={styles['iconSocial']}/>
                    <AiOutlineInstagram  id={styles['iconInsta']} className={styles['iconSocial']}/>   
                    <AiOutlineGithub id={styles['iconGit']} className={styles['iconSocial']}/> 
                    <AiOutlineTwitter id={styles['iconTwiter']} className={styles['iconSocial']}/>
                </div>
               <div className={styles['phone']}>
                  <p>Phone: <span className={styles['myPhoneNumber']}>{phoneNumber}</span></p>
                  <div>
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
