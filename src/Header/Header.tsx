import React, {useState, useEffect, useCallback} from 'react'
import styles from './Header.module.scss'


function Header() {
   const [y, setY] = useState(window.scrollY);

   useEffect(() => {
      setY(window.scrollY);
   }, []);
    
   useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        return () => {
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
   }, [y]);
  
   const handleNavigation = useCallback(
     (e:any):void => {
        const window = e.currentTarget;
        setY(window.scrollY);
      }, [y]
   );

   const handleGoToHome =()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   
   const handleGoToSection=(nameSection:string)=>{
      const element = document.getElementById(nameSection);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   }

  return (
    <div className={styles['header']+' '+styles[y > 0 ?'fixed':'']}>
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
