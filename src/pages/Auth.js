import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/UIElements/Card';
import Input from '../components/formElements/Input';
import Button from '../components/formElements/Button';
import {
  // VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../util/validators';
import { useForm } from '../hooks/form-hook';
import { AuthContext } from '../context/auth-context';
// import LoadingSpinner from '../components/UIElements/LoadingSpinner';

import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  let navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: '', isValid: false },
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    
    auth.login(formState.inputs.email.value, formState.inputs.password.value);
    navigate('/');
  };

  return (
    <Card className='authentication'>
      {isLoginMode ? <h2>Login</h2> : <h2>Signup</h2>}
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element='input'
            id='name'
            label='Name'
            errorText='Please enter a valid name.'
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          ></Input>
        )}

        <Input
          element='input'
          id='email'
          type='email'
          label='Email'
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Input
          type='password'
          element='input'
          id='password'
          label='Password'
          errorText='Please enter a valid password (at lease 6 characters)'
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(6)]}
        />
        <Button type='submit' disabled={!formState.isValid}>
          {isLoginMode ? 'login' : 'SIGNUP'}
        </Button>
      </form>
      {isLoginMode && <p>Not registered yet?</p>}
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
