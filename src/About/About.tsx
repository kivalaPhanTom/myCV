import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import styles from './About.module.scss'

function About() {
  return (
    <div className={styles['aboutContainer']}>
        <TitleSection title1 ='About' title2='me'/>
        <div className={styles['aboutContent']}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s,  when an unknown printer took 
a galley of type  and scrambled it to make a type specimen book.
            </p>
        </div>
    </div>
  )
}


export default About
