import { ListCharacterStarWars } from '../components';


export const JediPage = () => {
  return (
    <>
    <h1 className="fw-semibold text-success text-center p-4">The Most Powerful Jedis of The Saga</h1>

    <ListCharacterStarWars publisher='Jedi' />

    </>
  )
}
