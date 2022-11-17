import React, { useState } from 'react';

import Card from '../components/UIElements/Card';
import Input from '../components/formElements/Input';
import Button from '../components/formElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../util/validators';

import './Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className='authentication'>
      {isLoginMode ? <h2>Login</h2> : <h2>Signup</h2>}
      <hr />
      {!isLoginMode && (
        <Input
          element='input'
          id='name'
          label='Name'
          errorText='Please enter a valid name.'
          validators={[VALIDATOR_REQUIRE()]}
        ></Input>
      )}

      <Input
        element='input'
        id='email'
        type='email'
        label='Email'
        errorText='Please enter a valid email address.'
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        type='password'
        element='input'
        id='password'
        label='Password'
        errorText='Please enter a valid password (at lease 6 characters)'
        validators={[VALIDATOR_MINLENGTH(6)]}
      />
      <Button type='submit'>{isLoginMode ? 'login' : 'SIGNUP'}</Button>
      {isLoginMode && <p>Not registered yet?</p>}
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
