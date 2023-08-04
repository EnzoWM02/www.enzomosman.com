import styles from './MenuSidebar.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLayoutContext } from 'src/hooks/useLayoutContext.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface IMenuSidebar {
  children:
    | React.ReactElement<ISidebarOption>[]
    | React.ReactElement<ISidebarOption>;
  open: boolean;

  onClose(): any;

  header?: React.ReactElement;
  footer?: React.ReactElement;
}

export default function MenuSidebar({
  children,
  open,
  onClose,
  header,
  footer,
}: IMenuSidebar) {
  const layoutContext = useLayoutContext();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 100%)`,
      transition: {
        type: 'spring',
        stiffness: 30,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0px at 100% ${layoutContext.mobileBreakpoint ? 100 : 0}%)`,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 40,
      },
    },
  };

  return ReactDOM.createPortal(
    <AnimatePresence key={'menuOverlayPortalPresence'} mode={'wait'}>
      {open && (
        <div className={`${styles.overlayRoot}`}>
          <div className={`${styles.overlay}`} onClick={onClose} />
          <motion.div
            variants={sidebar}
            initial="closed"
            animate="open"
            exit="closed"
            className={`${styles.sideBarRoot} ${
              layoutContext.mobileBreakpoint ? styles.lg : styles.sm
            }`}
          >
            {!!header && header}
            <div className={`${styles.childrenContainer}`}>{children}</div>
            {!!footer && (
              <div className={`${styles.footerContainer}`}>{footer}</div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export interface ISidebarOption {
  icon: string;
  title: string;
  onClick?: () => void;
  to?: string;
}

export function SidebarOption({ icon, title, onClick, to }: ISidebarOption) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <React.Fragment>
      <div className={`${styles.optionWrapper}`} onClick={handleOnClick}>
        <i className={`${icon}`} />
        <span>{title}</span>
      </div>
      <div className={`${styles.separator}`} />
    </React.Fragment>
  );
}
