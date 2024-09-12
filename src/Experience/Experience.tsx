import TitleSection from '../TitleSection/TitleSection'
import styles from './Experience.module.scss'
import ExperienceItem from './ExperienceItem'
import {useSelector } from 'react-redux'

type listExperienceObject={
    key:string;
    company:string;
    fromTime:string;
    toTime:string;
    role:string;
    detail:string;
    img:string;
}

function Experience() {
    const listExperience = useSelector((state:{CVSlice:{listExperience:listExperienceObject[]}})=> state.CVSlice.listExperience)
    return (
        <div className={styles['experienceContainer']}>
            <TitleSection title1 ='My' title2='experience'/>
            <div className={styles['experienceContent']}>
                {
                    listExperience.map((item, index)=>(
                        <div className={styles['item']}  key = {index}>
                            <ExperienceItem
                              order = {item.key}
                              company = {item.company}
                              fromTime = {item.fromTime}
                              toTime = {item.toTime}
                              role = {item.role}
                              detail = {item.detail}
                              img = {item.img}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience
