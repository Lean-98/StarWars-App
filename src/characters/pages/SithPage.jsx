import { ListCharacterStarWars } from '../components';


export const SithPage = () => {
  return (
    <>
    <h1 className="fw-semibold text-danger text-center p-4">The Most Powerful Sith Lords to Ever Exist</h1>
    
    <ListCharacterStarWars publisher='Sith' />
    </>
  )
}
