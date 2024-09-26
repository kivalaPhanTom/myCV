import { useState, useEffect, useCallback } from 'react'
import styles from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { HOME_MENU, SKILLS_MENU, EXPERIENCE_MENU, PORTFOLIO_MENU, CONTACT_MENU, EDUCATION_MENU } from '../commonParams/commonParams'
import * as cvActions from "../Redux/Actions";
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

function Header() {
   const dispatch = useDispatch();
   const [y, setY] = useState(window.scrollY);
   const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
   const MenuItemSelected = useSelector((state: { CVSlice: { MenuItemSelected: number } }) => state.CVSlice.MenuItemSelected)
   const [menuId, setMenu] = useState<string>('')
   useEffect(() => {
      setY(window.scrollY);
   }, []);

   useEffect(() => {
      window.addEventListener("scroll", (e) => handleNavigation(e));
      return () => {
         window.removeEventListener("scroll", (e) => handleNavigation(e));
      };

   }, [y]);
   useEffect(() => {
      const elEdu = document.getElementById("education")
      const elSkill = document.getElementById("skills")
      const elEx = document.getElementById("experience")
      const elPortfolio = document.getElementById("portfolio")
      const elContact = document.getElementById("contact")
    
      if (elEdu && elSkill && elEx && elPortfolio && elContact) {
         const posEdu = elEdu.getBoundingClientRect()
         const startEdu: number = posEdu.top + window.pageYOffset
         const endEdu: number = posEdu.bottom + window.pageYOffset

         const posSkill = elSkill.getBoundingClientRect()
         const startSkill: number = posSkill.top + window.pageYOffset
         const endSkill: number = posSkill.bottom + window.pageYOffset

         const posEx = elEx.getBoundingClientRect();
         const startEx: number = posEx.top + window.pageYOffset
         const endEx: number = posEx.bottom + window.pageYOffset

         const posPortfolio = elPortfolio.getBoundingClientRect()
         const startPortfolio: number = posPortfolio.top + window.pageYOffset
         const endPortfolio: number = posPortfolio.bottom + window.pageYOffset

         const posContact = elContact.getBoundingClientRect()
         const startContact: number = posContact.top + window.pageYOffset
         const endContact: number = posContact.bottom + window.pageYOffset

         if (y >= startEdu && y <= endEdu) {
            dispatch(cvActions.selectMenuItem(EDUCATION_MENU))
         } else if (y >= startSkill && y <= endSkill) {
            dispatch(cvActions.selectMenuItem(SKILLS_MENU))
         } else if (y >= startEx && y <= endEx) {
            dispatch(cvActions.selectMenuItem(EXPERIENCE_MENU))
         } else if (y >= startPortfolio && y <= endPortfolio) {
            dispatch(cvActions.selectMenuItem(PORTFOLIO_MENU))
         } else if (y >= startContact && y <= endContact) {
            dispatch(cvActions.selectMenuItem(CONTACT_MENU))
         } else {
            dispatch(cvActions.selectMenuItem(0))
         }
      }
   }, [y])

   const handleNavigation = useCallback(
      (e: any): void => {
         const window = e.currentTarget;
         setY(window.scrollY);
      }, [y]
   );

   const handleGoToHome = () => {
      dispatch(cvActions.selectMenuItem(HOME_MENU))
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setOpenMenuMobile(false)
   }

   const handleGoToSection = (nameSection: string, value: number) => {
      // const element = document.getElementById(nameSection)
      // if (element) element.scrollIntoView({ behavior: 'smooth' })
      if (nameSection === '') {
         window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
         const element = document.getElementById(nameSection)
         if (element) {
            const position = element.getBoundingClientRect();
            const startAbout: number = position.top + window.pageYOffset + 30;
            window.scrollTo({ top: startAbout, behavior: 'smooth' });
         }
      }
      dispatch(cvActions.selectMenuItem(value))
      setOpenMenuMobile(false)
   }
   const toggleDrawer = () => setOpenMenuMobile((prevState) => !prevState)
   console.log('MenuItemSelected:', MenuItemSelected)
   return (
      <>
         <div className={styles['header'] + ' ' + styles[y > 0 ? 'fixed' : '']}>
            <div className={styles['container'] + " " + styles['menuDesktop']}>
               <ul className={styles['menuList']}>
                  <li>
                     <div >
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === CONTACT_MENU ? 'active' : 'notActive']} onClick={() => handleGoToSection('contact', CONTACT_MENU)}>Contact</p>
                        {/* <div className={styles[CONTACT_MENU === MenuItemSelected ? 'textDecoration' : '']}></div> */}
                     </div>
                  </li>
                  <li>
                     <div >
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === PORTFOLIO_MENU ? 'active' : 'notActive']} onClick={() => handleGoToSection('portfolio', PORTFOLIO_MENU)}>Porfolio</p>
                        {/* <div className={styles[PORTFOLIO_MENU === MenuItemSelected ? 'textDecoration' : '']}></div> */}
                     </div>
                  </li>
                  <li>
                     <div >
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === EXPERIENCE_MENU ? 'active' : 'notActive']} onClick={() => handleGoToSection('experience', EXPERIENCE_MENU)}>Experience</p>
                        <div className={styles[EXPERIENCE_MENU === MenuItemSelected ? 'textDecoration' : '']}></div>
                     </div>
                  </li>
                  <li>
                     <div>
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === SKILLS_MENU ? 'active' : 'notActive']} onClick={() => handleGoToSection('skills', SKILLS_MENU)}>Skills</p>
                        {/* <div className={styles[SKILLS_MENU === MenuItemSelected ? 'textDecoration' : '']}></div> */}
                     </div>
                  </li>
                  <li>
                     <div >
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === EDUCATION_MENU ? 'active' : 'notActive']} onClick={() => handleGoToSection('education', EDUCATION_MENU)}>Education</p>
                        {/* <div className={styles[EDUCATION_MENU === MenuItemSelected ? 'textDecoration' : '']}></div> */}
                     </div>
                  </li>
                  <li>
                     <div >
                        <p className={styles['p_menuItem'] + ' ' + styles[MenuItemSelected === 0 ? 'active' : 'notActive']} onClick={handleGoToHome}>Home</p>
                        {/* <div className={styles[HOME_MENU === MenuItemSelected ? 'textDecoration' : '']}></div> */}
                     </div>
                  </li>

               </ul>
            </div>
            <div className={styles['menuMobile']}>
               <AiOutlineMenuFold className={styles['iconCollapeMenu']} onClick={toggleDrawer} />
            </div>

         </div>
         <Drawer
            open={openMenuMobile}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
         >
            <div>
               <div className={styles['divIconCloseMobile']}>
                  <AiOutlineClose className={styles['iconCloseMobile']} onClick={toggleDrawer} />
               </div>
               <div className={styles['itemMobile']}>
                  <p onClick={handleGoToHome}>Home</p>
               </div>
               <div className={styles['itemMobile']}>
                  <p onClick={() => handleGoToSection('skills', SKILLS_MENU)}>Skills</p>
               </div>
               <div className={styles['itemMobile']}>
                  <p onClick={() => handleGoToSection('experience', EXPERIENCE_MENU)}>Experience</p>
               </div>
               <div className={styles['itemMobile']}>
                  <p onClick={() => handleGoToSection('portfolio', PORTFOLIO_MENU)}>Porfolio</p>
               </div>
               <div className={styles['itemMobile']}>
                  <p onClick={() => handleGoToSection('contact', CONTACT_MENU)}>Contact</p>
               </div>
            </div>
         </Drawer>
      </>

   )
}


export default Header
