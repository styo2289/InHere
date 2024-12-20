import styles from "./SideNavBar.module.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navData } from "./NavData.jsx";

function SideNavBar () {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }

    return (
        <div className={open ? styles.sidenav : styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {open ? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            })}
        </div>
    )
}

export default SideNavBar;