import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div className={styles['portfolioContainer']}>
    <TitleSection title1 ='My' title2='Portfolio'/>
    <div className={styles['portfolioContent']}>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
        <div className={styles['item']}>
            <PortfolioItem/>
        </div>
    </div>
</div>
  )
}



export default Portfolio
