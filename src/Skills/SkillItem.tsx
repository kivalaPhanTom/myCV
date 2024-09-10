import React from 'react'
import styles from './Skills.module.scss'
interface SkillObject {
  // order: string;
  // name: string;
  img: string;
}
// { order, name, img }: SkillObject
function SkillItem({ img }: SkillObject) {
  return (
    <div className={styles['pointMarker']}>
      <div className={styles['pin2']}>

        <img
          src={img}
          className={styles['logoSkillImg']}
          alt='logo skill'
        />
      </div>
    </div>
    // <div className={styles['skillItem']}>
    //   <div className={styles['skillItemContainer']}>
    //     <div className={styles['circleImg']}>
    //           <img src={img} alt="img_skill"/>
    //       </div>
    //       <div className={styles['divSkillName']}>
    //           <span className={styles['skillName']}>{name}</span>
    //       </div>
    //   </div>
    // </div>
  )
}

export default SkillItem
