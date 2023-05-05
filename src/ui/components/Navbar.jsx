import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-brand d-flex justify-content-center" to="/search">
            Star Wars
          </Link>

          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link d-flex justify-content-center ${isActive ? "active" : ""}`
                }
                to="/jedi"
              >
                Jedi
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link d-flex justify-content-center ${isActive ? "active" : ""}`
                }
                to="/sith"
              >
                Sith
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link d-flex justify-content-center ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-info">{user?.name}</span>

              <button className="nav-item nav-link btn" onClick={onLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};