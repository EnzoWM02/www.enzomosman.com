import styles from './PageLayout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import { useLayoutContext } from 'src/hooks/useLayoutContext.tsx';

export default function PageLayout() {

  const {mobileBreakpoint, isLowRes} = useLayoutContext();

  return (
    <div
      className={`${styles.pageWrapper} ${isLowRes && 'lowRes'} ${
        mobileBreakpoint && 'mobile'
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}