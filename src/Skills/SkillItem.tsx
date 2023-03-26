import React from 'react'
import styles from './Skills.module.scss'
interface SkillObject{
  order:string;
  name:string; 
  img:string; 
}

function SkillItem({order, name, img}:SkillObject) {
  return (
    <div className={styles['skillItem']}>
      <div className={styles['skillItemContainer']}>
        <div className={styles['circleImg']}>
              <img src={img} alt="img_skill"/>
          </div>
          <div className={styles['divSkillName']}>
              <span className={styles['skillName']}>{name}</span>
          </div>
      </div>
    </div>
  )
}

export default SkillItem
