import React from 'react';
import { connect } from 'react-redux';

import styles from './footer.module.css';
import { API } from '../../redux/actions';

class Footer extends React.Component {

    nextPage = () => {
        this.props.dispatch(
            API.getPokemonsRequest(
                this.props.currentPage + 1,
                this.props.countPerPage
            )
        )
    };

    prevPage = () => {
        if(this.props.currentPage > 1) {
            this.props.dispatch(
                API.getPokemonsRequest(
                    this.props.currentPage - 1,
                    this.props.countPerPage
                )
            )
        }
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.children}
                <div className={styles.leftSide}></div>
                <div className={styles.center}>
                    <button onClick={() => this.prevPage()}>Back</button>
                    <p>{this.props.currentPage}</p>
                    <button onClick={() => this.nextPage()}>Next</button>
                </div>
                <div className={styles.rightSide}></div>
            </div>
        );
    }
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
