import React from 'react';
import { connect } from 'react-redux';

import styles from './footer.module.css';
import { API } from '../../redux/actions';

const Footer = ({ currentPage, countPerPage, dispatch }) => {
    const nextPage = () => {
        dispatch(
            API.getPokemonsRequest(
                currentPage + 1,
                countPerPage
            )
        )
    };

    const prevPage = () => {
        if(currentPage > 1) {
            dispatch(
                API.getPokemonsRequest(
                    currentPage - 1,
                    countPerPage
                )
            )
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.leftSide}></div>
            <div className={styles.center}>
                <button onClick={() => prevPage()}>Back</button>
                <p>{currentPage}</p>
                <button onClick={() => nextPage()}>Next</button>
            </div>
            <div className={styles.rightSide}></div>
        </div>
    );
}

const mapStateToProps = ({
    getPokemonsData: {
        currentPage,
        countPerPage
    }
}) => ({
    currentPage,
    countPerPage
})

export default connect(mapStateToProps)(Footer);
