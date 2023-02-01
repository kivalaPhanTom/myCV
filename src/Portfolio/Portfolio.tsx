import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div className={styles['portfolioContainer']}>
    <p>Portfolio</p>
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
