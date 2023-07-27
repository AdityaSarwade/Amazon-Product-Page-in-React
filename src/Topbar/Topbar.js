import React from "react";

import logo from '../assets/logo.png';
import classes from "./Topbar.module.css";

const Topbar = () => {
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src={logo} alt='Amazon Logo'/>
            </nav>
        </header>
    );
}

export default Topbar;