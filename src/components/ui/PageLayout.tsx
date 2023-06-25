import styles from './PageLayout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';

export default function PageLayout() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}
