import SkillItem from './SkillItem'
import styles from './Skills.module.scss'
import { useSelector } from 'react-redux'

type listSkillsObject = {
  key: string;
  name: string;
  img: string;
}

function ListSkill() {
  const listSkills = useSelector((state: { CVSlice: { listSkills: listSkillsObject[] } }) => state.CVSlice.listSkills)

  return (
    <div className={styles['listSkill']}>
      {
        listSkills.map((e, index) => (
          <SkillItem
            name={e.name}
            key={index}
            img={e.img}
          />
        ))
      }
    </div>
  )
}

export default ListSkill
