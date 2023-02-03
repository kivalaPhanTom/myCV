import React from 'react'
import DownloadCV from '../DownloadCV/DownloadCV'
import styles from './WelcomeIntro.module.scss'

function WelcomeIntro() {
  return (
    <div className={styles['WelcomeIntro']}>
       <div className={styles['WelcomeIntroContainer']}>
          <p className={styles['nameAuthor']}>Hello, I am Nguyen Dinh Duy</p>
          <p className={styles['job']}>I am developer</p>
          <p className={styles['detailYourself']}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque iure quae, ipsa blanditiis magnam provident sit totam voluptatibus reiciendis at commodi non fugit, voluptate expedita dignissimos nostrum odio ex incidunt.</p>
          <DownloadCV/>
       </div>
    </div>
  )
}



export default WelcomeIntro
