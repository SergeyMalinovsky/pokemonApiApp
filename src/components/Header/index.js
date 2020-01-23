/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logoImage from '../../resources/pokemon-logo.png';

import AuthorizationForm from '../Auth';


const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    <Link to='/' >
                        <img src={logoImage} alt='App-logo'/>
                    </Link>
                </div>
                <div className={styles.title}>
                    <p>App Title</p>
                </div>
            </div>
            <div className={styles.center}>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/'>Help</Link></div>
                <div><Link to='/'>Favorite</Link></div>
                <div><Link to='/'>About</Link></div>
            </div>
            <div className={styles.rightSide}>
                <AuthorizationForm />
            </div>
        </div>
    );
};

export default Header;
