import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  //Add proper user id once connected to backend
  return (
    <ul className='nav-links'>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/plants'>My plants</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/plants/new'>Add plants</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}
    </ul>
  );
};

export default NavLinks;
