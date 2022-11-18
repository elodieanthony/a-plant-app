import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './NavLinks.css';

import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  //Add proper user id once connected to backend
  return (
    <ul className='nav-links'>
      {auth.isLoggedIn && (
        <li>
          <Link to='/plants'>My plants</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Link to='/plants/new'>Add plants</Link>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <Link to='/auth'>LOGIN</Link>
        </li>
      )}
      {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}
    </ul>
  );
};

export default NavLinks;
