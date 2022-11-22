import { useNavigate } from 'react-router-dom';

import Input from '../components/formElements/Input';
import Button from '../components/formElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../util/validators';
import { useForm } from '../hooks/form-hook';

import './PlantForm.css';

const UpdatePlant = props => {
  const [formState, inputHandler] = useForm({
    name: { value: '', isValid: false },
    description: { value: '', isValid: false },
    water: { value: '', isValid: false },
    exposition: { value: '', isValid: false },
    temperature: { value: '', isValid: false },
    soil: { value: '', isValid: false },
    repoting: { value: '', isValid: false },
  });
  const navigate = useNavigate();
  
  const plantUpdateSubmitHandler = event => {
    event.preventDefault();
    navigate('/plants');
  };

  return (
    <form className='plant-form' onSubmit={plantUpdateSubmitHandler}>
      <Input
        type='text'
        id='name'
        element='input'
        label='Name'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter a valid name.'
        onInput={inputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description.'
        onInput={inputHandler}
      />
      <Input
        type='text'
        id='water'
        element='input'
        label='Watering'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter watering times.'
        onInput={inputHandler}
      />
      <Input
        type='text'
        id='exposition'
        element='input'
        label='Exposition'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter plant exposition.'
        onInput={inputHandler}
      />
      <Input
        type='text'
        id='temperature'
        element='input'
        label='Temperature'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter plant recomanded temperature.'
        onInput={inputHandler}
      />
      <Input
        type='text'
        id='soil'
        element='input'
        label='Soil'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter soil type.'
        onInput={inputHandler}
      />
      <Input
        type='text'
        id='repoting'
        element='input'
        label='Repoting'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter repoting if it is needed.'
        onInput={inputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLANT
      </Button>
    </form>
  );
};

export default UpdatePlant;
