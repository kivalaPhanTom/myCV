import React from 'react'
import styles from './DownloadCV.module.scss'
import {useSelector } from 'react-redux';

function DownloadCV() {
  return (
    <div className={styles['downloadCV']}>
      <div className={styles['btnDownload']}>
        <p>Download Cv</p>
      </div>
    </div>
  )
}


export default DownloadCV
