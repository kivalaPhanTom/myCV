import React,{useEffect} from 'react';
import Header from './Header/Header';
import styles from './app.module.scss'
import Avatar from './Avatar/Avatar';
import WelcomeIntro from './WelcomeIntro/WelcomeIntro';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function App() {
 
  return (
    <div className={styles['App']}>
       <Header/>
      <div className={styles['appContainer']}>
       
        <div id="home"className={styles['intro']}>
          <div className={styles['introContainer']}>
              <div className={styles['avatar']}>
                  <Avatar/>
              </div>
              <div className={styles['welcomeIntro']}>
                  <WelcomeIntro/>
              </div>
          </div>
        </div>
        <div id="skills" className={styles['skills']}>
              <Skills/>
        </div>
        <div id="experience"  className={styles['experience']}>
            <Experience/>
        </div>
        <div id="portfolio" className={styles['portfolio']}>
           <Portfolio/>
        </div>
        <div id="contact" className={styles['contact']}>
           <Contact/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
