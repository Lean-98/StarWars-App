import { Link } from 'react-router-dom';

export const CharacterStarWars = ({
  id,
  character,
  publisher,
  rank,
  first_appearance,
  Weapon,
  description,
}) => {
  const characterImageUrl = `/assets/characterStarWars/${id}.webp`;

  return (
    <div className="my-card">
      <img src={characterImageUrl} className="img img-fluid" alt={id} />
      <div className="profile-name fw-medium">{character}</div>
      <div className="profile-position fw-normal">{rank}</div>
      <div className="profile-overview">
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <h3>{publisher}</h3>
              <p>
                <span className='fw-bold'>First appearance:</span> <br />
                {first_appearance}
              </p>

              <Link to={`/character/${id}`}><button className={"btn btn-md ms-4 " + ( publisher === 'Jedi' ? 'btn-success' : 'btn-danger')}>More info...</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Another card-hero design
//     return (
//       <div className="container-fluid text-center animate__animated animate__fadeIn">
//         <div className="card">

//           <div className="row no-gutters">
//             <div className="col-sm-6 col-md-7 col-lg-8">
//               <img src={ heroImageUrl } className="card-img-top" alt={id} />
//             </div>

//             <div className="col-sm-6 col-md-5 col-lg-4">
//               <div className="card-body">
//                 <h5 className="card-title">{superhero}</h5>
//                 <p className="card-text">{alter_ego}</p>
//                 {
//                   ( alter_ego !== characters ) && (<p>{characters}</p>)
//                 }
//                 <p className="card-text">
//                   <small className="text-muted">{ first_appearance }</small>
//                 </p>

//                 <Link to={`/hero/${ id }`}>
//                   Más...
//                 </Link>

//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//   )
// }
