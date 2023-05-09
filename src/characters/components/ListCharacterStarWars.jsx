import { CharacterStarWars } from './CharacterStarWars';
import { getCharactersByPublisher } from '../helpers';
import { useMemo } from 'react';


export const ListCharacterStarWars = ( { publisher } ) => {

    const characters = useMemo( () => getCharactersByPublisher( publisher ), [ publisher ]);

  return (
    <div className='row rows-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 '>
        { 
            characters.map( character => (
                <li className='list-group-item' 
                    key={ character.id }>
                    <CharacterStarWars  key={ character.id }
                    { ...character }
                    />
                </li>
            ))
        }
    </div >
  )
}
