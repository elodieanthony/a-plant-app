import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/formElements/ImageUpload';
import Input from '../components/formElements/Input';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../util/validators';
import Button from '../components/formElements/Button';

import './PlantForm.css';

const NewPlant = props => {
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm({
    name: { value: '', isValid: false },
    description: { value: '', isValid: false },
    image: {
      value:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg/1185px-BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg?uselang=fr',
      isValid: false,
    },
    water: { value: '', isValid: false },
    exposition: { value: '', isValid: false },
    temperature: { value: '', isValid: false },
    soil: { value: '', isValid: false },
    repoting: { value: '', isValid: false },
  });

  const plantSubmitHandler = event => {
    event.preventDefault();
    navigate('/plants');
  };

  return (
    <form className='plant-form' onSubmit={plantSubmitHandler}>
      <Input
        type='text'
        id='name'
        element='input'
        label='Name'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter a valid name.'
        onInput={inputHandler}
      />
      <ImageUpload
        center
        id='image'
        onInput={inputHandler}
        errorText='Please provide an image.'
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
        ADD PLANT
      </Button>
    </form>
  );
};

export default NewPlant;
