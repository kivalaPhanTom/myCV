import React from 'react'
import ListSkill from './ListSkill'
import styles from './Skills.module.scss'

function Skills() {
  return (
    <div className={styles['skillsContainer']}>
        <p>Skills</p>
        <div className={styles['skillsContent']}>
           <ListSkill/>
        </div>
    </div>
  )
}


export default Skills
