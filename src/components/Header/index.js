import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logoImage from '../../resources/pokemon-logo.png';


class Header extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <div className={styles.logo}>
                        <Link to='/' >
                            <img src={logoImage} alt='App-logo'/>
                        </Link>
                    </div>
                    <div className={styles.title}>
                        <p></p>
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
