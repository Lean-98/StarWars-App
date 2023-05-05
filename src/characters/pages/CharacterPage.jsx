import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../helpers';

export const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useMemo(() => getCharacterById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!character) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6 col-md-5 col-lg-5 text-center mb-4">
          <img
            src={`/assets/characterStarWars/${id}.webp`}
            alt={character.character}
            className="img-fluid animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-sm-6 col-md-7 col-lg-7 text-center">
          <ul className="list-group list-group-flush">

             <li className={"list-group-item " + ( character.publisher === 'Jedi' ? 'list-group-item-success' : 'list-group-item-danger')}>
              <h3 className='fw-bolder'>{character.character}</h3>
              <b>Affiliation:</b> {character.publisher}{" "}
              <b>Rank:</b> {character.rank}{" "}
              <br />
              <b>Weapon:</b> {character.Weapon}{" "}
            </li>

            <li className="list-group-item">
            <h5 className="fw-bolder mt-3">First Appearance:</h5>
            <p>{character.first_appearance}</p>
            <h5 className="fw-bolder mt-3">Description:</h5>
            <p>{character.description}</p>

          <button className={"btn " + ( character.publisher === 'Jedi' ? 'btn-success' : 'btn-danger')} onClick={onNavigateBack}>
            Return
          </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
