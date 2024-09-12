import styles from './Skills.module.scss'
interface SkillObject {
  img: string;
  name: string;
}

function SkillItem({ img, name }: SkillObject) {
  return (
    <div className={styles['skill_item']}>
      <div className={styles['pointMarker']}>
        <div className={styles['pin2']}>

          <img
            src={img}
            className={styles['logoSkillImg']}
            alt='logo skill'
          />
        </div>

      </div>
      <div className={styles['divSkillName']}>
        <p>{name}</p>
      </div>

    </div>
  )
}

export default SkillItem
