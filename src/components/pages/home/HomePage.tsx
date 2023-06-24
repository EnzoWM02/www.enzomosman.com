import styles from './HomePage.module.css'

import React from 'react'
import {useTranslation} from "react-i18next";

import photo from '../../../assets/temp.png';
import {Links} from "../../../utils/Links.tsx";

export default function HomePage() {

    const {t} = useTranslation();

    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.outletContainer}`}>
                <div className={`${styles.imageContainer}`}>
                    <div className={`${styles.outerCircle}`}/>
                    <div className={`${styles.outerFullCircle}`}/>
                    <div className={`${styles.innerFullCircle}`}/>
                    <img className={`${styles.imgCircle}`} src={photo} alt={'enzo photo'}/>
                </div>
                <div className={`${styles.titleContainer}`}>
                    <span className={`${styles.firstTitle}`}>{t('home.title1')}</span>
                    <span className={`${styles.secondTitle}`}>{t('home.title2')}</span>
                    <div className={`${styles.iconContainer}`}>
                        <a href={Links.Github} target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-github"/></a>
                        <a href={Links.Linkedin} target={'_blank'} rel={'noreferrer'}><i
                            className="fa-brands fa-linkedin"/></a>
                        <a href={Links.Instagram} target={'_blank'} rel={'noreferrer'}><i
                            className="fa-brands fa-instagram"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}