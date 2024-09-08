import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Education.module.scss'
type eduItemType = {
    detail: string;
    fromTime: string;
    img: string;
    name: string;
    toTime: string;
}
function EducationItem(props: eduItemType) {
    const { detail, fromTime, img, name, toTime } = props
    return (
        <div className={styles.eduItem}>
            <div className={styles.eduItemContainer}>
                <div className={styles.eduIntro}>
                    <div>
                        <img className={styles.logoEdu} src={img} alt='education' />
                        <p>{fromTime} - {toTime}</p>
                    </div>
                </div>


                <div className={styles.eduInfo}>
                    <p className={styles.eduName}>{name}</p>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    )
}


export default EducationItem
