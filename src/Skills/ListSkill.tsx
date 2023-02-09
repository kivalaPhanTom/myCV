import React from 'react'
import SkillItem from './SkillItem'
import styles from './Skills.module.scss'

function ListSkill() {
  return (
    <div className={styles['listSkill']}>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
        <SkillItem/>
    </div>
  )
}



export default ListSkill
