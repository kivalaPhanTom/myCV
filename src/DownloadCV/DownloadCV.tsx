import React from 'react'
import styles from './DownloadCV.module.scss'
import {useSelector } from 'react-redux';
import useDownloader from 'react-use-downloader';

function DownloadCV() {
  const linkCV = useSelector((state:{CVSlice:{linkCV:string}})=> state.CVSlice.linkCV)
  console.log("linkCV:",linkCV)
  const { download } = useDownloader();
  const handleDownload =()=>{
    download(linkCV, 'CV-nguyendinhduy.pdf')
  }

  return (
    <div className={styles['downloadCV']}>
      <div className={styles['btnDownload']} onClick={handleDownload}>
        <p>Download Cv</p>
      </div>
    </div>
  )
}


export default DownloadCV
