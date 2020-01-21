import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';


class Header extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <div className={styles.logo}>
                    </div>
                    <div className={styles.title}>
                        <p>App Title</p>
                    </div>
                </div>
                <div className={styles.center}>
                        <div><Link to='/' >Home</Link></div>
                        <div><Link to='/' >Help</Link></div>
                        <div><Link to='/' >Favorite</Link></div>
                        <div><Link to='/' >About</Link></div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.auth}></div>
                </div>
            </div>
        );
    }
}

export default Header;
