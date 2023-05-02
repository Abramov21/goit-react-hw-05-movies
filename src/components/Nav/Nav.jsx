import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <header className={s.box}>
      <ul className={s.list}>
        <li className={s.list_item}>
          <NavLink to="/" className={s.link}>
            HomePage
          </NavLink>
        </li>
        <li className={s.list_item}>
          <NavLink to="/Movies" className={s.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
