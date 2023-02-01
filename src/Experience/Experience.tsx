import React from 'react'
import styles from './Experience.module.scss'
import ExperienceItem from './ExperienceItem'

function Experience() {
  return (
    <div className={styles['experienceContainer']}>
        <p>My experience</p>
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
