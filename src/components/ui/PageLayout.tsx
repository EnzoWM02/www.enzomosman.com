import styles from './PageLayout.module.css'
import {Outlet} from "react-router-dom";

export default function PageLayout() {

    return (
        <div className={`${styles.pageWrapper}`}>
            <Outlet />
        </div>
    )
}