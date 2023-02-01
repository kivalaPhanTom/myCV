import React from 'react'
import styles from './avatar.module.scss'

function Avatar() {
  return (
    <div className={styles['container']}>
      <div className={styles['avatarMain']}>
          <div className={styles['avtBlockBefore']}>
            <img alt="avt" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"/>
          </div>
          <div className={styles['avtBlockAfter']}>
           
          </div>
      </div>
    </div>
  )
}


export default Avatar
