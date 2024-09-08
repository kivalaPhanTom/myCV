import React from 'react'
import SkillItem from './SkillItem'
import styles from './Skills.module.scss'
import {useSelector } from 'react-redux'

type listSkillsObject={
  key:string;
  name:string;
  img:string;
}

function ListSkill() {
  const listSkills = useSelector((state:{CVSlice:{listSkills:listSkillsObject[]}})=> state.CVSlice.listSkills)
  return (
    <div className={styles['listSkill']}>
      {
        listSkills.map((item,index)=>(
          <SkillItem key={index} order={item.key} name={item.name} img={item.img}/>
        ))
      }
    </div>
  )
}



export default ListSkill
