import React, {useState, useEffect, useCallback} from 'react'
import styles from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import {HOME_MENU, SKILLS_MENU, EXPERIENCE_MENU, PORTFOLIO_MENU, CONTACT_MENU} from '../commonParams/commonParams'
import * as cvActions  from "../Redux/Actions";

function Header() {
   const dispatch = useDispatch();
   const [y, setY] = useState(window.scrollY);
   const MenuItemSelected = useSelector((state:{CVSlice:{MenuItemSelected:number}})=> state.CVSlice.MenuItemSelected)

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
      dispatch(cvActions.selectMenuItem(HOME_MENU))
      window.scrollTo({ top: 0, behavior: 'smooth' })

   }
   
   const handleGoToSection=(nameSection:string, value:number)=>{
      const element = document.getElementById(nameSection);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
      dispatch(cvActions.selectMenuItem(value))
   }

  return (
    <div className={styles['header']+' '+styles[y > 0 ?'fixed':'']}>
         <div className={styles['container']}>
           <ul className={styles['menuList']}>
              <li>
                  <div >
                      <p className={styles['p_menuItem']} onClick={handleGoToHome}>Home</p>
                      <div className={styles[HOME_MENU === MenuItemSelected ? 'textDecoration' :'']}></div>
                   </div>
              </li>
              <li>
                  <div>
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('skills', SKILLS_MENU)}>Skills</p>
                      <div className={styles[SKILLS_MENU === MenuItemSelected ? 'textDecoration' :'']}></div>
                   </div>
              </li>
              <li>
                  <div >
                      <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('experience', EXPERIENCE_MENU)}>Experience</p>
                      <div className={styles[EXPERIENCE_MENU === MenuItemSelected ? 'textDecoration' :'']}></div>
                   </div>
              </li>
              <li>
                  <div >
                     <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('portfolio', PORTFOLIO_MENU)}>Porfolio</p>
                     <div className={styles[PORTFOLIO_MENU === MenuItemSelected ? 'textDecoration' :'']}></div>
                   </div>
              </li>
              <li>
                  <div >
                     <p className={styles['p_menuItem']} onClick={()=>handleGoToSection('contact', CONTACT_MENU)}>Contact</p>
                     <div className={styles[CONTACT_MENU === MenuItemSelected ? 'textDecoration' :'']}></div>
                   </div>
              </li>
           </ul>
        </div>
    </div>
  )
}


export default Header
