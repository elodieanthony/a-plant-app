import { Fragment, useContext } from 'react';

import Button from '../components/formElements/Button';
import { AuthContext } from '../context/auth-context';

import './Welcome.css';

const Welcome = () => {
  const auth = useContext(AuthContext);
  return (
    <div className='welcome-page'>
      {!auth.isLoggedIn && (
        <Fragment>
          <h1>Welcome on a Plant App! </h1>
          <p>In here you can collect and reference all the plants you own.</p>
          <p>And more!</p>
          <p>Don't hesitate to join us by</p>
        </Fragment>
      )}
      {auth.isLoggedIn && (
        <Fragment>
          <h1>Welcome user !</h1>
          <p> Feel free to navigate through this app </p>
        </Fragment>
      )}

      <div className='align-content'>
        {!auth.isLoggedIn && (
          <Fragment>
            <Button inverse to='/auth'>
              Subscribe
            </Button>
            <p>Or</p>
            <Button to='/auth'>Login</Button>
          </Fragment>
        )}
        {auth.isLoggedIn && (
          <Fragment>
            <Button inverse to='/plants'>
              My PLANTS
            </Button>
            <p>Or</p>
            <Button to='/plants/new'>ADD PLANTS</Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Welcome;
