import styles from './HomePage.module.css'

import React from 'react'
import {useTranslation} from "react-i18next";

import photo from '../../../assets/temp.png';
import {Links} from "../../../utils/Links.tsx";

import {motion} from "framer-motion";

export default function HomePage() {

    const {t} = useTranslation();

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    return (
        <React.Fragment>
            <motion.div className={`${styles.outletContainer}`}
                        initial="hidden"
                        animate="visible"
                        exit={{y: -50, opacity: 0}}
                        transition={{duration: 0.2}}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <div className={`${styles.titleContainer}`}>
                    <motion.span variants={itemVariants} className={`${styles.firstTitle}`}>{t('home.title1')}</motion.span>
                    <motion.span variants={itemVariants} className={`${styles.secondTitle}`}>{t('home.title2')}</motion.span>
                    <motion.span variants={itemVariants} className={`${styles.desc}`}>{t('home.desc')}</motion.span>
                    <motion.div variants={itemVariants} className={`${styles.iconContainer}`}>
                        <a href={Links.Github} target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-github"/></a>
                        <a href={Links.Linkedin} target={'_blank'} rel={'noreferrer'}><i
                            className="fa-brands fa-linkedin"/></a>
                        <a href={Links.Instagram} target={'_blank'} rel={'noreferrer'}><i
                            className="fa-brands fa-instagram"/></a>
                    </motion.div>
                </div>
                <motion.div variants={imageVariant} className={`${styles.imageContainer}`}>
                    <motion.div className={`${styles.outerCircle}`}/>
                    <motion.div className={`${styles.outerFullCircle}`}/>
                    <motion.div className={`${styles.innerFullCircle}`}/>
                    <motion.img className={`${styles.imgCircle}`} src={photo} alt={'enzo photo'}/>
                </motion.div>
            </motion.div>
        </React.Fragment>
    )
}