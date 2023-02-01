import React from 'react'
import styles from './Experience.module.scss'
import { AiFillRightCircle } from "react-icons/ai";

function ExperienceItem() {
  return (
    <div className={styles['expItemContainer']}>
        <div className={styles['timeLine']}>
            <div className={styles['time']}>
                <p>2015 - 2021</p>
            </div>
            <div className={styles['arrow']}>
                <div className={styles['line']}></div>
                <AiFillRightCircle className={styles['iconRightCircle']}/>
            </div>
            <div className={styles['note']}>
               <p>UIT</p>
            </div>
        </div>
        <div className={styles['detail']}>
            <p className={styles['role']}>Student</p>
            <p className={styles['roleDetail']}>heh he mma sdsidsidjsd cvckvjckvj qwooinj cncnc</p>
         </div>
    </div>
  )
}

export default ExperienceItem
