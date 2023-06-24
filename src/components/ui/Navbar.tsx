import styles from './Navbar.module.css'
import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Languages} from "../../i18n/locales/locales.tsx";
import Button from "./Button.tsx";

export default function Navbar() {

    const {t, i18n} = useTranslation();
    const selectedLanguage = i18n.language;
    const changeLang = async (lang: Languages) => {
        try {
            await i18n.changeLanguage(lang);
        } catch (e) {
            console.error('Error on changeLang()', e);
        }
    }

    return (
        <div className={`${styles.navbarWrapper}`}>
            <div className={`${styles.navbarContainer}`}>
                <Button className={`${styles.cvButton}`} onClick={() => alert('clicked')}>{t('navbar.downloadCv')}</Button>
                <div className={`${styles.linkButtons}`}>
                    <Link to={'/'}>{t('navbar.home')}</Link>
                    <Link to={'/skills'}>{t('navbar.skills')}</Link>
                    <Link to={'/'}>{t('navbar.projects')}</Link>
                    <Link to={'/'}>{t('navbar.formation')}</Link>
                    <Link to={'/'}>{t('navbar.about')}</Link>
                </div>
                <div className={`${styles.flagsContainer}`}>
                    <span className={`${selectedLanguage !== Languages.Portuguese && styles.disabled}`}
                          onClick={() => changeLang(Languages.Portuguese)}>{t('navbar.portuguese')}</span>
                    <span className={`${selectedLanguage !== Languages.English && styles.disabled}`}
                          onClick={() => changeLang(Languages.English)}>{t('navbar.english')}</span>
                </div>
            </div>
        </div>
    )
}