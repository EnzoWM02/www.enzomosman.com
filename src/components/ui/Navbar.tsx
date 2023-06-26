import styles from './Navbar.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages } from '@/i18n/locales/locales.tsx';
import Button from './Button.tsx';

import UsaIcon from '@/assets/usaIcon.png';
import BrazilIcon from '@/assets/brazilIcon.png';
import { IRoute, NavbarPagesRoutes } from '@/utils/Routes.tsx';

export default function Navbar() {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLowRes = windowWidth < 1300;
  const isMobile = windowWidth < 1080;
  const isUltraLowRes = windowWidth < 650;

  return (
    <div className={`${styles.navbarWrapper}`}>
      {isMobile ? (
        <div className={`${styles.mobileNavbarContainer}`}>
          <CvButton isLowRes={isLowRes} isUltraLowRes={isUltraLowRes} />
          <div className={`${styles.mobileNavbarIconsContainer}`}>
            {NavbarPagesRoutes.map((route: IRoute, idx: number) => {
              return (
                <Link key={`linkroute_${idx}`} to={route.path}>
                  <div className={`${styles.iconTitleContainer}`}>
                    <i className={`fa-solid ${route.icon}`} />
                    <span className={`${styles.iconTitle}`}>
                      {t(route.title)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <LanguageSwitch isLowRes={isLowRes} />
        </div>
      ) : (
        <div className={`${styles.navbarContainer}`}>
          <CvButton isLowRes={isLowRes} isUltraLowRes={isUltraLowRes} />
          <div className={`${styles.linkButtons}`}>
            {NavbarPagesRoutes.map((route: IRoute, idx: number) => {
              return (
                <Link key={`linkroute_${idx}`} to={route.path}>
                  {t(route.title)}
                </Link>
              );
            })}
          </div>
          <LanguageSwitch isLowRes={isLowRes} />
        </div>
      )}
    </div>
  );
}

function LanguageSwitch(props: { isLowRes: boolean }) {
  const { t, i18n } = useTranslation();

  const changeLang = async (lang: Languages) => {
    try {
      await i18n.changeLanguage(lang);
    } catch (e) {
      console.error('Error on changeLang()', e);
    }
  };

  const selectedLanguage = i18n.language;

  return (
    <div
      className={`${styles.flagsContainer}`}
      style={{ width: props.isLowRes ? 120 : 200 }}
    >
      {props.isLowRes ? (
        <React.Fragment>
          <img
            className={`${styles.countryIcon} ${
              selectedLanguage !== Languages.Portuguese && styles.iconDisabled
            }`}
            src={BrazilIcon}
            onClick={() => changeLang(Languages.Portuguese)}
          />
          <img
            className={`${styles.countryIcon} ${
              selectedLanguage !== Languages.English && styles.iconDisabled
            }`}
            src={UsaIcon}
            onClick={() => changeLang(Languages.English)}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span
            className={`${
              selectedLanguage !== Languages.Portuguese && styles.disabled
            }`}
            onClick={() => changeLang(Languages.Portuguese)}
          >
            {t('navbar.portuguese')}
          </span>
          <span
            className={`${
              selectedLanguage !== Languages.English && styles.disabled
            }`}
            onClick={() => changeLang(Languages.English)}
          >
            {t('navbar.english')}
          </span>
        </React.Fragment>
      )}
    </div>
  );
}

function CvButton(props: { isLowRes: boolean, isUltraLowRes: boolean }) {
  const { t } = useTranslation();
  return (
    <Button
      className={`${styles.cvButton} ${props.isLowRes && styles.icon} ${props.isUltraLowRes && styles.removeDisplay}`}
      onClick={() => alert('clicked')}
    >
      {props.isLowRes ? (
        <i className="fa-solid fa-download" />
      ) : (
        t('navbar.downloadCv')
      )}
    </Button>
  );
}
