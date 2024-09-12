import TitleSection from '../TitleSection/TitleSection'
import ListSkill from './ListSkill'
import styles from './Skills.module.scss'

function Skills() {
  return (
    <div className={styles['skillsContainer']}>
        <TitleSection title1 ='My' title2='skills'/>
        <div className={styles['skillsContent']}>
           <ListSkill/>
        </div>
    </div>
  )
}


export default Skills
