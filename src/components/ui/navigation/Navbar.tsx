import styles from './Navbar.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages } from 'src/i18n/locales/locales.tsx';
import Button from 'src/components/ui/Button.tsx';

import { IRoute, NavbarPagesRoutes } from 'src/utils/Routes.tsx';
import MenuSidebar, {
  SidebarOption,
} from 'src/components/ui/menuSidebar/MenuSidebar.tsx';
import { useLayoutContext } from 'src/hooks/useLayoutContext.tsx';
import MarketingHeader from 'src/components/ui/menuSidebar/header/MarketingHeader.tsx';

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
          if (layoutContext.isLowRes && route.title === 'about.title') return;
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
      <MenuSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        header={<MarketingHeader />}
        footer={<LanguageSwitch className={`${styles.mobileLanguageSwitch}`} />}
      >
        <SidebarOption
          icon={'fa-solid fa-question'}
          title={t('about.title')}
          to={'/about'}
        />
        <SidebarOption
          icon={'fa-solid fa-download'}
          title={t('navbar.sidebar.downloadCv')}
        />
      </MenuSidebar>
    </div>
  );
}

function DesktopNavbar() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.navbarContainer}`}>
      <CvButton />
      <div className={`${styles.linkButtons}`}>
        {NavbarPagesRoutes.map((route: IRoute, idx: number) => {
          return (
            <Link key={`linkroute_${idx}`} to={route.path}>
              {t(route.title)}
            </Link>
          );
        })}
      </div>
      <LanguageSwitch />
    </div>
  );
}

function LanguageSwitch({ className = '' }: { className?: string }) {
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
    <div className={`${styles.flagsContainer} ${className}`}>
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
    </div>
  );
}

function CvButton() {
  const { t } = useTranslation();
  return (
    <Button className={`${styles.cvButton}`} onClick={() => alert('clicked')}>
      {t('navbar.downloadCv')}
    </Button>
  );
}
