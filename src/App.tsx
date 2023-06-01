import React,{useEffect} from 'react';
import Header from './Header/Header';
import styles from './app.module.scss'
import Avatar from './Avatar/Avatar';
import WelcomeIntro from './WelcomeIntro/WelcomeIntro';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import {useSelector, useDispatch } from 'react-redux';
import * as cvActions  from "./Redux/Actions";
import Loading from './Loading/Loading';
import LazyLoad from 'react-lazy-load';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state:{CVSlice:{isLoading:boolean}})=> state.CVSlice.isLoading)
  
  useEffect(()=>{
    dispatch(cvActions.getCVInfo({}))
  },[])

  return (
    <div className={styles['App']}>
      <div className={styles['introPage']}> 
        <Header/>
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
      </div>
      
      <div className={styles['appContainer']}>
        
        <div id="skills" className={styles['skills']}>
            <LazyLoad 
              threshold={0.35}
            >
               <Skills/>
            </LazyLoad>
        </div>

        <div id="experience"  className={styles['experience']}>
            <LazyLoad 
              threshold={0.35}
            >
                 <Experience/>
            </LazyLoad>
        </div>

        <div id="portfolio" className={styles['portfolio']}>
            <LazyLoad 
              threshold={0.35}
            >
                <Portfolio/>
            </LazyLoad>
        </div>

        <div id="contact" className={styles['contact']}>
           <LazyLoad 
              threshold={0.35}
            >
                <Contact/>
            </LazyLoad>
        </div>

      </div>
      {
        isLoading ? (
          <Loading/>
        ):''
      }
    </div>
  );
}

export default App;
