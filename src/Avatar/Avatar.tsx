import React from 'react'
import styles from './avatar.module.scss'
import {useSelector } from 'react-redux';

function Avatar() {
  const linkAvatar = useSelector((state:{CVSlice:{linkAvatar:string}})=> state.CVSlice.linkAvatar)
  return (
    <div className={styles['container']}>
      <div className={styles['avatarMain']}>
          <div className={styles['avtBlockBefore']}>
            <img alt="avt" src={linkAvatar}/>
          </div>
          <div className={styles['avtBlockAfter']}>
           
          </div>
      </div>
    </div>
  )
}


export default Avatar
