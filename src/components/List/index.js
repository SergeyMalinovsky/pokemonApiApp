import React from 'react';

import styles from './List.module.css';
import Card from '../../containers/Card';

class List extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <Card />
            </div>
        );
    }
}

export default List;
