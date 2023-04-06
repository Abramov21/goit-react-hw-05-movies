import { NavLink, useLocation } from 'react-router-dom';
export const Nav = () => {
  const location = useLocation();
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" state={location}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to="/Movies" state={location}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};
