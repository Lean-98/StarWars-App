import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { CharacterStarWars } from '../components';
import { getCharacterByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const characters = getCharacterByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && characters.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-2">
          <h1 className="fw-semibold text-center p-4">Most Powerful Characters of The Star Wars Saga</h1>
          <hr />
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <h4 className="d-flex justify-content-around justify-content-md-start">
              Searching
            </h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Search a character"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />

              <button className="btn btn-warning mt-2">Search</button>
            </form>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4 className="d-flex justify-content-around justify-content-md-start text-center">
              Results
            </h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

            <div
              className="alert alert-warning animate__animated animate_fadeIn"
              style={{ display: showSearch ? "" : "none" }}
            >
              Search for a character from the star wars saga
            </div>

            <div
              className="alert alert-danger animate__animated animate_fadeIn"
              style={{ display: showError ? "" : "none" }}
            >
              No character with <b>{q}</b>
            </div>

            {characters.map((character) => (
              <CharacterStarWars key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
