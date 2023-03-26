import React from 'react'
import styles from './Portfolio.module.scss'

type listPortfolioObject={
  key:string;
  name:string;
  img:string;
  link:string;
}

function PortfolioItem({key, name, img, link}:listPortfolioObject) {
  return (
    <div className={styles['itemContainer']}>
        <div className={styles['backgroundPortfolio']}>
            <img id={styles['imgBackgroupPortfolio']} src={img} alt=''/>
        </div>
        <div className={styles['infoPortfolio']}>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default PortfolioItem
