/* eslint-disable react/jsx-indent */
import React from 'react';

import { connect } from 'react-redux';
import { USER_STATUS_AUTHORIZATED } from '../../redux/types/userState'

import styles from './Auth.module.css';

const AuthorizationForm = props => {
    console.log(props);
    const { userName, status } = props;

    const renderWhenAuthoritatedUser = () => {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>You are logged as {userName}!</p>
                </div>
                <br />
                <div className={styles.bottom}>
                    <div className={styles.signButtons}>
                        <button type='button'>Account</button>
                        <button type='button'>Sign Out</button>
                    </div>
                </div>
            </div>
        );
    };
    
    const renderWhenNonAuthoritatedUser = () => {
        return (
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.title}>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className={styles.middle}>
                    <table>
                        <tbody>
                            <tr><td><span>Login:</span></td><td><input type='text' /></td></tr>
                            <tr><td><span>Password:</span></td><td><input type='password' /></td></tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.signButtons}>
                        <button type='button'>Sign Up</button>
                        <button type='button'>Sign In</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.wrapper}>
            { status === USER_STATUS_AUTHORIZATED
                ? renderWhenAuthoritatedUser()
                : renderWhenNonAuthoritatedUser()
            }
        </div>
    );
};

const mapStateToProps = ({
    userStateReducer: {
        status, name,
    } }) => ({
    userName: name,
    status,
});

export default connect(mapStateToProps)(AuthorizationForm);
