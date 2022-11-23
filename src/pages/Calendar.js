import { Fragment, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Button from '../components/formElements/Button';
import Modal from '../components/UIElements/Modal';
import Input from '../components/formElements/Input';
import { useForm } from '../hooks/form-hook';

// import 'react-calendar/dist/Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CustomCalendar.css';
import { VALIDATOR_REQUIRE } from '../util/validators';

const Canlendar = props => {
  const [showModal, setShowModal] = useState(false);
  const [formState, inputHandler] = useForm({
    name: { value: '', isValid: false },
    wateringTime: { value: '', isValid: false },
  });

  const localizer = momentLocalizer(moment);
  const addNewEventHandler = () => {
    setShowModal(true);
  };

  const cancelAddNewEventhandler = () => {
    setShowModal(false);
  };

  const addNewEventSubmitHandler = event => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Fragment>
      <Modal
        show={showModal}
        onCancel={cancelAddNewEventhandler}
        header='Add new Event'
        footerClass='plant-item__modal-actions'
        footer={
          <Fragment>
            <Button inverse type='submit' disabled={!formState.isValid}>
              CONFIRM
            </Button>
            <Button danger onClick={cancelAddNewEventhandler}>
              CANCEL
            </Button>
          </Fragment>
        }
        onSubmit={addNewEventSubmitHandler}
      >
        <Input
          type='text'
          id='name'
          element='input'
          label='Plant name'
          validators={[VALIDATOR_REQUIRE]}
          errorText='Please enter a valid name.'
          onInput={inputHandler}
        ></Input>
        <Input
          type='text'
          id='watering-time'
          element='input'
          label='Number of watering by week'
          validators={[]}
          errorText='Please enter a valid number.'
          onInput={inputHandler}
        ></Input>
      </Modal>
      <Button onClick={addNewEventHandler}>Add New Event</Button>
      {/* <div className='calendar-container center'>
        <Calendar
          onChange={onChange}
          value={value}
          className='calendar'
          onClickDay={(value, event) => {
            alert('Clicked day:', value);
          }}
        />
      </div> */}
      <div className='calendar-container'>
        <Calendar
          localizer={localizer}
          startAccessor='start'
          endAccessor='end'
        />
      </div>
    </Fragment>
  );
};

export default Canlendar;
