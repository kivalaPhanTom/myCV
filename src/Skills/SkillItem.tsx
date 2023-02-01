import React from 'react'
import styles from './Skills.module.scss'

function SkillItem() {
  return (
    <div className={styles['skillItem']}>
        <div className={styles['circleImg']}>
             
        </div>
        <div className={styles['divSkillName']}>
            <span className={styles['skillName']}>Html</span>
        </div>
        
    </div>
  )
}


export default SkillItem
