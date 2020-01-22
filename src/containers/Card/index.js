import React from 'react';

import styles from './Card.module.css';
import starEmptyImage from '../../resources/star-empty.png';
import starFilledImage from '../../resources/star-filled.png';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelectFavorite: false
        }
    }

    onMouseOverSelectFavoriteImage = (state) => {
        this.setState({ isSelectFavorite: state });
    }

    render() {
        const pokemon = this.props.pokemon;

        return (
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <div className={styles.avatar}>
                            <img src={pokemon.imageUrl.front_default} alt='avatar'/>
                        </div>
                        <div className={styles.description}>
                            <div className={styles.name}><p>{pokemon.name}</p></div>
                            <table>
                                <tbody>
                                    <tr><td><label>Exp:</label></td><td><p>{pokemon.experience}</p></td></tr>
                                    <tr><td><label>Height:</label></td><td><p>{pokemon.height}</p></td></tr>
                                    <tr><td><label>Weight:</label></td><td><p>{pokemon.weight}</p></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.favoriteImage}>
                            <img 
                                src={this.state.isSelectFavorite ? starFilledImage : starEmptyImage}
                                alt='select as favorite'
                                onMouseOver={() => this.onMouseOverSelectFavoriteImage(true)}
                                onMouseOut={() => this.onMouseOverSelectFavoriteImage(false)}
                            />
                        </div>
                    </div>
                    <div className={styles.center}></div>
                    <div className={styles.bottom}></div>
                </div>
            </div>
        );
    }
}

export default Card;
