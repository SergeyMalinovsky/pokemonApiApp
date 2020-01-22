import React from 'react';

import styles from './Card.module.css';
import starEmptyImage from '../../resources/star-empty.png';
import starFilledImage from '../../resources/star-filled.png';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFavorite: false,
            isSelectFavorite: false,
            isShowingImage: false
        }

        console.log(props);
    }

    onMouseOverSelectFavoriteImage = state => this.setState({ isSelectFavorite: state });
    showingPokemonImage = state => this.setState({ isShowingImage: state });

    handleClickOnFavorite = () => {
        if(!this.state.isFavorite) {
            this.addToFavorite();
        } else {
            this.deleteFromFavorite();
        }
    }

    addToFavorite = () => this.setState({ isFavorite: true });
    deleteFromFavorite = () => this.setState({ isFavorite: false });

    render() {
        const pokemon = this.props.pokemon;

        return (
            <div className={styles.main} onMouseOut={() => this.showingPokemonImage(false)}>
                { this.state.isShowingImage ? 
                <div className={styles.pokemonImage} onClick={() => this.showingPokemonImage(false)}>
                    <img 
                        src={pokemon.imageUrl.front_default} 
                        alt='pokemonImage'
                    />
                </div>
                :
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <div className={styles.avatar}>
                            <img 
                                src={pokemon.imageUrl.front_default} 
                                alt='avatar' 
                                onClick={() => this.showingPokemonImage(true)}
                            />
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
                                src={this.state.isSelectFavorite || this.state.isFavorite 
                                    ? starFilledImage 
                                    : starEmptyImage
                                }
                                
                                alt='select as favorite'
                                onMouseOver={() => this.onMouseOverSelectFavoriteImage(true)}
                                onMouseOut={() => this.onMouseOverSelectFavoriteImage(false)}
                                onClick={() => this.handleClickOnFavorite()}
                            />
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.abilities}>
                                <span>Abilities:</span><p>{pokemon.abilities.length}</p>
                        </div>
                    </div>
                    <div className={styles.bottom}></div>
                </div>
                }
            </div>
        );
    }
}

export default Card;
