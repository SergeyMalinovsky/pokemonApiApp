/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { connect } from 'react-redux';
import { USER_STATUS_AUTHORIZATED } from '../../redux/types/userState';
import { USER } from '../../redux/actions';

import styles from './Auth.module.css';

const LOGIN_FIELD_ID = 'LOGIN_FIELD';
const PASSW_FIELD_ID = 'PASSW_FIELD';

class AuthorizationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                login: '',
                password: '',
            },
        };
    }

    renderWhenAuthoritatedUser = () => {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>You are logged as {this.props.userName}!</p>
                </div>
                <br />
                <div className={styles.bottom}>
                    <div className={styles.signButtons}>
                        <button type='button'>Account</button>
                        <button type='button' onClick={() => this.logOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        );
    };
    
    renderWhenNonAuthoritatedUser = () => {
        return (
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.title}>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className={styles.middle} onChange={e => this.onChangeFields(e)}>
                    <table>
                        <tbody>
                            <tr><td><span>Login:</span></td><td><input type='text' id={LOGIN_FIELD_ID} /></td></tr>
                            <tr><td><span>Password:</span></td><td><input type='password' id={PASSW_FIELD_ID} /></td></tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.signButtons}>
                        <button type='button'>Sign Up</button>
                        <button type='button' onClick={() => this.signIn()}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    };

    onChangeFields = (e) => {
        const { fields: { login, password } } = this.state;
        const { id, value } = e.target;

        switch (id) {
            case LOGIN_FIELD_ID:
                this.setState({
                    fields: {
                        login: value,
                        password: password,
                    },
                });
                break;
            case PASSW_FIELD_ID:
                this.setState({
                    fields: {
                        login: login,
                        password: value,
                    },
                });

                break;
            default:
                break;
        }
    };

    signIn = () => {
        const { login, password } = this.state.fields;
        
        if(login && password) {
            this.props.dispatch(USER.userAuthorizationRequest(login, password));
        }
    };

    logOut = () => this.props.dispatch(USER.userLogOut());

    render() {
        return (
            <div className={styles.wrapper}>
                { this.props.status === USER_STATUS_AUTHORIZATED
                    ? this.renderWhenAuthoritatedUser()
                    : this.renderWhenNonAuthoritatedUser()
                }
            </div>
        );
    }
}

const mapStateToProps = ({
    userStateReducer: {
        status, name,
    } }) => ({
    userName: name,
    status,
});

export default connect(mapStateToProps)(AuthorizationForm);
