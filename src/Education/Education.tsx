import { useSelector } from 'react-redux'
import TitleSection from '../TitleSection/TitleSection'
import styles from './Education.module.scss'
import EducationItem from './EducationItem'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

type listEducationObject = {
    key: string;
    name: string;
    img: string;
    fromTime: string;
    toTime: string;
    detail: string;
}
function Education() {
    const listEducation = useSelector((state: { CVSlice: { listEducation: listEducationObject[] } }) => state.CVSlice.listEducation)
    return (
        <div className={styles['eduContainer']}>
            <TitleSection title1='' title2='Education' />
            <div className={styles['eduContent']}>
                {
                    listEducation.length > 1 ? <>
                        <AliceCarousel
                            disableButtonsControls={true}
                            disableDotsControls={listEducation.length > 1 ? false : true}
                            autoPlay={listEducation.length > 1 ? true : false}
                            autoPlayInterval={3000}
                            infinite={listEducation.length > 1 ? true : false}
                            autoWidth={true}
                        >
                            {
                                listEducation.map(e => (
                                    <EducationItem
                                        key={e.key}
                                        detail={e.detail}
                                        fromTime={e.fromTime}
                                        img={e.img}
                                        name={e.name}
                                        toTime={e.toTime}
                                    />
                                ))
                            }
                        </AliceCarousel>
                    </> : <EducationItem
                        detail={listEducation[0]?.detail || ''}
                        fromTime={listEducation[0]?.fromTime || ''}
                        img={listEducation[0]?.img || ''}
                        name={listEducation[0]?.name || ''}
                        toTime={listEducation[0]?.toTime || ''}
                    />
                }

            </div>
        </div>
    )
}

export default Education
