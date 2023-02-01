import React from 'react'
import styles from './Portfolio.module.scss'

function PortfolioItem() {
  return (
    <div className={styles['itemContainer']}>
        <div className={styles['backgroundPortfolio']}>
            <img id={styles['imgBackgroupPortfolio']} src='https://www.w3schools.com/css/img_forest.jpg' alt=''/>
        </div>
        <div className={styles['infoPortfolio']}>
            <p>Name portfolio</p>
        </div>
    </div>
  )
}

export default PortfolioItem
