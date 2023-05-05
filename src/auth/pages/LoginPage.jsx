import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath");

    login("Leandro Bazan");

    navigate(lastPath, {
      replace: true,
    });
  };
  

  return (
    <section className="login">
      <div className="card mb-1">
        <div className="row row-cols-lg-2">
          <div className="col col-sm-5 col-md-6 col-lg-7 d-lg-flex mb-3">
            <img
              src="..\assets\characterStarWars\loginSEO02.jpg"
              alt="Star Wars"
              className="img rounded-t-5 rounded-tr-lg-4 rounded-bl-lg-5"
            />
          </div>
          <div className="col col-sm-7 col-md-6 col-lg-5  text-center text-lg-start">
            <div className="card-body py-5 px-md-5">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control" 
                    required
                  />
                  <label className="form-label text-primary" >
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control" required
                  />
                  <label className="form-label text-primary" >
                    Password
                  </label>
                </div>

                <button className="btn btn-primary btn-lg" onClick={onLogin}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


