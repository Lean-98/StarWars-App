import { characters } from '../data/star-wars';


export const getCharacterByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();

    if ( name.length === 0 )return [];

    return characters.filter(
      character => character.character.toLocaleLowerCase().includes( name )
    );
}