import styles from './PageLayout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import { useLayoutContext } from '@/hooks/useLayoutContext.tsx';

export default function PageLayout() {

  const {mobileBreakpoint} = useLayoutContext();

  return (
    <div className={`${styles.pageWrapper} ${mobileBreakpoint && styles.mobile}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}