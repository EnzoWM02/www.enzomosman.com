import styles from './MenuSidebar.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLayoutContext } from '@/hooks/useLayoutContext.tsx';
import { AnimatePresence, motion } from 'framer-motion';

interface IMenuSidebar {
  children:
    | React.ReactElement<ISidebarOption>[]
    | React.ReactElement<ISidebarOption>;
  open: boolean;

  onClose(): any;

  header?: React.ReactElement;
}

export default function MenuSidebar({
  children,
  open,
  onClose,
  header,
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
      clipPath: 'circle(0px at 100% 100%)',
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
            {!!header && (
              <div className={`${styles.headerContainer}`}>
                {header}
              </div>
            )}
            {children}
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
}

export function SidebarOption({ icon, title }: ISidebarOption) {
  return (
    <div className={`${styles.optionWrapper}`}>
      <i className={`${icon}`} />
    </div>
  );
}
