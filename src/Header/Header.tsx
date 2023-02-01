import React from 'react'
import styles from './Header.module.scss'

function Header() {
 
  return (
    <div className={styles['header']}>
         <div className={styles['container']}>
            <div className={styles['menuList']}>
               <div className={styles['menuItem']}>
                   <div className={styles['textDecoration']}>
                      <p className={styles['p_menuItem']}>Home</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>About</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>Experience</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>Skills</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>Porfolio</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>Contact</p>
                   </div>
               </div>
            </div>
        
        </div>
    </div>
  )
}


export default Header
