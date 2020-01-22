import React from 'react';

import styles from './List.module.css';

import Card from '../../containers/Card';
import Loader from '../../containers/loader-element'

import {  GET_POKEMONS_SUCCESS } from '../../redux/types';
import { API } from '../../redux/actions';

import { connect } from 'react-redux';

class List extends React.Component {

    componentDidMount() {
        const { currentPage, countPerPage } = this.props;
        this.props.dispatch(API.getPokemonsRequest(currentPage, countPerPage));
    }
    
    renderContent = () => {
        const { loadStatus, data } = this.props;

        switch(loadStatus) {
            case GET_POKEMONS_SUCCESS:
                return data.map((item, index) => <Card key={index} pokemon={item}/>);
            default:
                return (<Loader />);
        }
    }

    render() {
        

        return (
            <div className={styles.main}>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = ({getPokemonsData: {
    status,
    data,
    currentPage,
    countPerPage
}}) => ({
    loadStatus: status,
    data,
    currentPage,
    countPerPage
})

export default connect(mapStateToProps)(List);
