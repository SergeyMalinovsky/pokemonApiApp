import React from 'react';

import styles from './List.module.css';
import Card from '../../containers/Card';

import { MOCKED_POKEMONS } from '../../constants/mockedPokemons';

import { connect } from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                {MOCKED_POKEMONS.map((item, index) => <Card key={index} card={item}/>)}
            </div>
        );
    }
}

const mapStateToProps = (pokemons) => ({pokemons})

export default connect(mapStateToProps)(List);
