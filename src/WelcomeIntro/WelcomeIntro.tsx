import React from 'react'
import DownloadCV from '../DownloadCV/DownloadCV'
import styles from './WelcomeIntro.module.scss'
import Typewriter from 'react-ts-typewriter';
import {useSelector } from 'react-redux';

function WelcomeIntro() {
  const ownerName = useSelector((state:{CVSlice:{ownerName:string}})=> state.CVSlice.ownerName) 
  const about = useSelector((state:{CVSlice:{about:string}})=> state.CVSlice.about)
  const typingKeyword = useSelector((state:{CVSlice:{typingKeyword:string[]}})=> state.CVSlice.typingKeyword)

  return (
    <div className={styles['WelcomeIntro']}>
       <div className={styles['WelcomeIntroContainer']}>
      
       
          <p className={styles['nameAuthor']}>{`Hello, I am ${ownerName}`}</p>
          
          <p className={styles['job']}>
            {
              typingKeyword.length > 0 ?(
                <Typewriter  
                  text={typingKeyword} 
                  loop={true} 
                  speed={200}
                  delay={2000}
                />
              ):''
            }
           
          </p>
          <p className={styles['detailYourself']}>{about}</p>
          <DownloadCV/>
       </div>
    </div>
  )
}



export default WelcomeIntro
