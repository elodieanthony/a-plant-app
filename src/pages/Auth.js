import React, { useState } from 'react';

import Card from '../components/UIElements/Card';
import Input from '../components/formElements/Input';
import Button from '../components/formElements/Button';

import './Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className='authentication'>
      <h2>Login</h2>
      <hr />
      {!isLoginMode && <Input element='input' id='name' label='Name'></Input>}

      <Input element='input' id='email' type='email' label='Email' />
      <Input type='password' element='input' id='password' label='Password' />
      <Button type='submit'>{isLoginMode ? 'login' : 'SIGNUP'}</Button>
      {isLoginMode && <p>Not registered yet?</p>}
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
