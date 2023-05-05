import { characters } from '../data/star-wars';


export const getCharacterById = ( id ) => {
   return characters.find( character => character.id === id );
}