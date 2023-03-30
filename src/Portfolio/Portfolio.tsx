import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'
import {useSelector } from 'react-redux';

type listPortfolioObject={
    key:string;
    name:string;
    img:string;
    link:string;
}

function Portfolio() {
    const listPortfolio = useSelector((state:{CVSlice:{listPortfolio:listPortfolioObject[]}})=> state.CVSlice.listPortfolio)
    return (
        <div className={styles['portfolioContainer']}>
        <TitleSection title1 ='My' title2='Portfolio'/>
        <div className={styles['portfolioContent']}>
            {
                listPortfolio.map((item, index)=>(
                    <div className={styles['item']} key={index}>
                        <PortfolioItem
                            key = {item.key}
                            name = {item.name}
                            img = {item.img}
                            link = {item.link}
                        />
                    </div>
                ))
            }
        </div>
    </div>
    )
}



export default Portfolio
