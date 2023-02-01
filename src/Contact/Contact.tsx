import React from 'react'
import styles from './Contact.module.scss'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineGooglePlus} from "react-icons/ai";


function Contact() {
  return (
     <div className={styles['contactContainer']}>
        <p>Contact me</p>
        <div className={styles['contactContent']}>
            <div className={styles['social']}>
                <p>Social network</p>
                <div className={styles['listSocial']}>
                    <AiOutlineGooglePlus id={styles['iconGG']} className={styles['iconSocial']}/>
                    <AiOutlineFacebook id={styles['iconFB']} className={styles['iconSocial']}/> 
                    <AiOutlineInstagram  id={styles['iconInsta']} className={styles['iconSocial']}/>   
                    <AiOutlineGithub id={styles['iconGit']} className={styles['iconSocial']}/> 
                    <AiOutlineTwitter id={styles['iconTwiter']} className={styles['iconSocial']}/>
                </div>
               
            </div>
            <div className={styles['otherInfo']}>
                 <div>
                    <div>
                        <p>Phone</p>
                        <p>0986622074</p>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Thủ đức, hcm, vietnam</p>
                    </div>
                    <div>
                        <p>Business hours</p>
                        <p>0986622074</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}


export default Contact
