import React from 'react';
import Header from './Header/Header';
import styles from './app.module.scss'
import Avatar from './Avatar/Avatar';
import WelcomeIntro from './WelcomeIntro/WelcomeIntro';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className={styles['App']}>
      <div className={styles['appContainer']}>
        <Header/>
        <div className={styles['intro']}>
          <div className={styles['introContainer']}>
              <div className={styles['avatar']}>
                  <Avatar/>
              </div>
              <div className={styles['welcomeIntro']}>
                  <WelcomeIntro/>
              </div>
          </div>
        </div>
        <div className={styles['about']}>
               <About/>
        </div>
        <div className={styles['skills']}>
              <Skills/>
        </div>
        <div className={styles['experience']}>
            <Experience/>
        </div>
        <div className={styles['portfolio']}>
           <Portfolio/>
        </div>
        <div className={styles['contact']}>
           <Contact/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
