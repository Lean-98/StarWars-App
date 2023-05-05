import { characters } from '../data/star-wars';

export const getCharactersByPublisher = ( publisher ) => {
    const validPublishers = ['Jedi', 'Sith'];
    if ( !validPublishers.includes( publisher )) {
        throw new Error(` ${publisher} is not a valid publisher`);
    }

    return characters.filter( character => character.publisher === publisher );
}