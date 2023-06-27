import styles from './Navbar.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages } from '@/i18n/locales/locales.tsx';
import Button from './Button.tsx';

import UsaIcon from '@/assets/usaIcon.png';
import BrazilIcon from '@/assets/brazilIcon.png';
import { IRoute, NavbarPagesRoutes } from '@/utils/Routes.tsx';
import MenuSidebar, { SidebarOption } from '@/components/ui/menuSidebar/MenuSidebar.tsx';
import { useLayoutContext } from '@/hooks/useLayoutContext.tsx';

export default function Navbar() {
  const layoutContext = useLayoutContext();

  return (
    <div
      className={`${!layoutContext.mobileBreakpoint && styles.navbarWrapper}`}
    >
      {layoutContext.isLowRes ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}

function MobileNavbar() {
  const { t } = useTranslation();
  const layoutContext = useLayoutContext();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${
        layoutContext.mobileBreakpoint
          ? styles.mobileLowResNavbar
          : styles.mobileNavbarContainer
      }`}
    >
      <div className={`${styles.mobileNavbarIconsContainer}`}>
        {NavbarPagesRoutes.map((route: IRoute, idx: number) => {
          if (layoutContext.isLowRes && route.title === 'navbar.about') return;
          return (
            <Link key={`linkroute_${idx}`} to={route.path}>
              <div className={`${styles.iconTitleContainer}`}>
                <i className={`${route.icon}`} />
                <span className={`${styles.iconTitle}`}>{t(route.title)}</span>
              </div>
            </Link>
          );
        })}
        {layoutContext.isLowRes && (
          <div
            className={`${styles.iconTitleContainer}`}
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa-solid fa-bars" />
            <span className={`${styles.iconTitle}`}>{t('navbar.menu')}</span>
          </div>
        )}
      </div>
      <MenuSidebar open={menuOpen} onClose={() => setMenuOpen(false)}>
        <SidebarOption icon={'fa-solid fa-vial'} title={'enzo'} />
        <SidebarOption icon={'fa-solid fa-vial'} title={'enzo'} />
        <SidebarOption icon={'fa-solid fa-vial'} title={'enzo'} />
      </MenuSidebar>
    </div>
  );
}

function DesktopNavbar() {
  const { t } = useTranslation();
  const layoutContext = useLayoutContext();

  return (
    <div className={`${styles.navbarContainer}`}>
      <CvButton isLowRes={layoutContext.isLowRes} />
      <div className={`${styles.linkButtons}`}>
        {NavbarPagesRoutes.map((route: IRoute, idx: number) => {
          return (
            <Link key={`linkroute_${idx}`} to={route.path}>
              {t(route.title)}
            </Link>
          );
        })}
      </div>
      <LanguageSwitch isLowRes={layoutContext.isLowRes} />
    </div>
  );
}

function LanguageSwitch({ isLowRes }: { isLowRes: boolean }) {
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
      className={`${
        isLowRes ? styles.switchFlagsContainer : styles.flagsContainer
      }`}
    >
      {isLowRes ? (
        <React.Fragment>
          {selectedLanguage === Languages.Portuguese && (
            <img
              className={`${styles.countryIcon}`}
              src={BrazilIcon}
              onClick={() => changeLang(Languages.English)}
            />
          )}
          {selectedLanguage === Languages.English && (
            <img
              className={`${styles.countryIcon}`}
              src={UsaIcon}
              onClick={() => changeLang(Languages.Portuguese)}
            />
          )}
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

function CvButton({ isLowRes }: { isLowRes: boolean }) {
  const { t } = useTranslation();
  return (
    <Button
      className={`${styles.cvButton} ${isLowRes && styles.icon}`}
      onClick={() => alert('clicked')}
    >
      {isLowRes ? (
        <i className="fa-solid fa-download" />
      ) : (
        t('navbar.downloadCv')
      )}
    </Button>
  );
}
