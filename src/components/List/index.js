import React from 'react';

import styles from './List.module.css';
import Card from '../../containers/Card';

import {  GET_POKEMONS_SUCCESS } from '../../redux/types'
import { API } from '../../redux/actions'

import { connect } from 'react-redux';

class List extends React.Component {

    componentDidMount() {
        this.props.dispatch(API.getPokemonsRequest(10));
    }
    
    renderContent = () => {
        const { loadStatus, data } = this.props;

        switch(loadStatus) {
            case GET_POKEMONS_SUCCESS:
                return data.map((item, index) => <Card key={index} pokemon={item}/>);
            default:
                return (<p>-></p>);
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
}}) => ({
    loadStatus: status,
    data
})

export default connect(mapStateToProps)(List);
