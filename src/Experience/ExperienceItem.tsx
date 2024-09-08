import React from 'react'
import styles from './Experience.module.scss'
import { AiFillRightCircle } from "react-icons/ai";

type listExperienceObject = {
  order: string;
  company: string;
  fromTime: string;
  toTime: string;
  role: string;
  detail: string;
  img: string;
}

function ExperienceItem({ order, company, fromTime, toTime, role, detail, img }: listExperienceObject) {
  return (
    <div className={styles['expItemContainer']}>
      <div className={styles['timeLine']+' '+styles[detail ? '':'timeLineNoDetail']}>
        <div className={styles['time']}>
          <p>{fromTime} - {toTime !== '' ? toTime : "Now"}</p>
        </div>
        <div className={styles['arrow']}>
          <div className={styles['line']}></div>
          <AiFillRightCircle className={styles['iconRightCircle']} />
        </div>
        <div className={styles['note']}>
          {img && <img className={styles['logo']} src={img} alt='logo' />}
          <p>{company}</p>
        </div>
      </div>
      <div className={styles['detail']+' '+styles[detail ? '':'noDetail']}>
        <p className={styles['role']}>{role}</p>
        <p className={styles['roleDetail']}>{detail}</p>
      </div>
    </div>
  )
}

export default ExperienceItem
