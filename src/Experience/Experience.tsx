import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import styles from './Experience.module.scss'
import ExperienceItem from './ExperienceItem'

function Experience() {
  return (
    <div className={styles['experienceContainer']}>
         <TitleSection title1 ='My' title2='experience'/>
        <div className={styles['experienceContent']}>
            <div className={styles['item']}>
                <ExperienceItem/>
            </div>
           
            <div className={styles['item']}>
                <ExperienceItem/>
            </div>
            <div className={styles['item']}>
                <ExperienceItem/>
            </div>
            <div className={styles['item']}>
                <ExperienceItem/>
            </div>
        </div>
    </div>
  )
}


export default Experience
