import React from 'react'
import styles from './TitleSection.module.scss'

interface TitleSectionProps {
    title1: string;
    title2: string;
}

function TitleSection({ title1, title2}: TitleSectionProps) {
    
  return (
    <div className={styles['titleSection']}>
        <div className={styles['titleSectionContainer']}>
            <p>{title1} <span>{title2}</span></p>
            <div className={styles['underline']}></div>
        </div>
    </div>
  )
}

export default TitleSection
