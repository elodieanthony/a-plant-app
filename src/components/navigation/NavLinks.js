import { Link } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  //Add proper user id once context is created
  return (
    <ul className='nav-links'>
      <li>
        <Link to='/userId/plants'>My plants</Link>
      </li>
      <li>
        <Link to='/plants/new'>Add plants</Link>
      </li>
      <li>
        <Link to='/auth'>Login</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
