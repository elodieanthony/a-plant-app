import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <a href='/'>My plants</a>
      </li>
      <li>
        <a href='/plants/new'>Add plants</a>
      </li>
      <li>
        <a href='/auth'>Login</a>
      </li>
    </ul>
  );
};

export default NavLinks;
