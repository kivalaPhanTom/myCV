import React from 'react'
import styles from './Header.module.scss'

function Header() {
  const handleGoToHome =()=>{
   window.scrollTo(0, 0);
  }
  const handleGoToSection=(nameSection:string)=>{
      const element = document.getElementById(nameSection);
      if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      }
  }
  
  return (
    <div className={styles['header']}>
         <div className={styles['container']}>
            <div className={styles['menuList']}>
               <div className={styles['menuItem']}>
                   <div className={styles['textDecoration']}>
                      <p className={styles['p_menuItem']} onClick={handleGoToHome}>Home</p>
                   </div>
               </div>
               {/* <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']}>About</p>
                   </div>
               </div> */}
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('skills')}>Skills</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('experience')}>Experience</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('portfolio')}>Porfolio</p>
                   </div>
               </div>
               <div className={styles['menuItem']}>
                   <div>
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('contact')}>Contact</p>
                   </div>
               </div>
            </div>
        
        </div>
    </div>
  )
}


export default Header
