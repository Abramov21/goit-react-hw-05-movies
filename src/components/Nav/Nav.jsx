import { NavLink } from 'react-router-dom';
export const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
      </ul>
    </>
  );
};
