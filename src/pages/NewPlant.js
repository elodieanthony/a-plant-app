import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/formElements/ImageUpload';
import Input from '../components/formElements/Input';
import { useForm } from '../hooks/form-hook';
import { PlantsContext } from '../context/plants-context';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../util/validators';
import Button from '../components/formElements/Button';

import './PlantForm.css';
import { useContext } from 'react';

const NewPlant = props => {
  const navigate = useNavigate();
  const { DUMMY_PLANTS, setDUMMY_PLANTS } = useContext(PlantsContext);
  const [formState, inputHandler] = useForm({
    name: { value: '', isValid: false },
    description: { value: '', isValid: false },
    image: {
      value: '',
      isValid: false,
    },
    water: { value: '', isValid: false },
    exposition: { value: '', isValid: false },
    temperature: { value: '', isValid: false },
    soil: { value: '', isValid: false },
    repoting: { value: '', isValid: false },
  });

  const plantSubmitHandler = event => {
    const newPlantData = {
      id: `id${DUMMY_PLANTS.length}`,
      image: URL.createObjectURL(formState.inputs.image.value),
      name: formState.inputs.name.value,
      description: formState.inputs.description.value,
      water: formState.inputs.water.value,
      exposition: formState.inputs.exposition.value,
      temperature: formState.inputs.temperature.value,
      soil: formState.inputs.soil.value,
      repoting: formState.inputs.repoting.value,
    };
    event.preventDefault();
    setDUMMY_PLANTS(prevPlants => [...prevPlants, newPlantData]);
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
