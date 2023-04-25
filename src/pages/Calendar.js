import { Fragment, useState, useContext, useCallback, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Button from '../components/formElements/Button';
import Modal from '../components/UIElements/Modal';
import Input from '../components/formElements/Input';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../util/validators';
import { CalendarContext } from '../context/calendar-context';
import { getIntervalDates } from '../util/intervalDates';
import { iconGenerator } from '../util/iconGenerator';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CustomCalendar.css';

const Canlendar = props => {
  const [showModal, setShowModal] = useState(false);
  const [formState, inputHandler] = useForm({
    name: { value: '', id: '', isValid: false },
    type: { value: '', id: '', isValid: false },
    typeTime: { value: '', id: '', isValid: false },
  });
  const [date, setNewDate] = useState(new Date(2022, 10, 25));
  const [events, setEvents] = useState([]);
  const calendar = useContext(CalendarContext);

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    setEvents([]);
    calendar.events.map(event =>
      event.eventDates.map(date =>
        setEvents(prev => [
          ...prev,
          {
            start: date,
            end: date,
            title: event.plantName,
            type: event.type,
          },
        ])
      )
    );
  }, [calendar.events]);

  const addNewEventModalHandler = () => {
    setShowModal(true);
  };

  const onNavigate = useCallback(
    newDate => {
      setNewDate(newDate);
    },
    [setNewDate]
  );

  const cancelAddNewEventhandler = () => {
    setShowModal(false);
  };

  const addNewEventSubmitHandler = event => {
    event.preventDefault();

    let today = new Date();
    let nextDate = new Date(new Date().setDate(today.getDate() + 60));
    let eventDates;

    setShowModal(false);

    switch (formState.inputs.typeTime.value) {
      case 'all':
        eventDates = getIntervalDates(today, nextDate, 1);
        break;
      case 'twiceWeek':
        eventDates = getIntervalDates(today, nextDate, 3);
        break;
      case 'onceWeek':
        eventDates = getIntervalDates(today, nextDate, 7);
        break;
      case 'twiceMonth':
        eventDates = getIntervalDates(today, nextDate, 14);
        break;
      case 'onceMonth':
        eventDates = getIntervalDates(today, nextDate, 30);
        break;
      default:
        return;
    }

    calendar.addEvent({
      plantName: formState.inputs.name.value,
      type: formState.inputs.type.value,
      eventDates: eventDates,
    });
  };

  const CustomEvent = props => {
    return (
      <div className='custom-event'>
        <h4>{props.title}</h4>
        <div className='custom-event__icon'>
          {iconGenerator(props.event.type)}
        </div>
      </div>
    );
  };
  console.log(props.items);
  return (
    <Fragment>
      <Modal
        show={showModal}
        onCancel={cancelAddNewEventhandler}
        header='Add new planning care Event'
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
          id='type'
          element='dropdown'
          label='Plant Name'
          validators={[VALIDATOR_REQUIRE]}
          errorText='Please select a valid type.'
          onInput={inputHandler}
          options={[props.items]}
        ></Input>
        <Input
          type='text'
          id='type'
          element='dropdown'
          label='Type of care'
          validators={[VALIDATOR_REQUIRE]}
          errorText='Please select a valid type.'
          onInput={inputHandler}
          options={[
            { value: 'watering', name: 'Watering' },
            { value: 'repoting', name: 'Repoting' },
            { value: 'fertilizer', name: 'Fertilizer' },
          ]}
        ></Input>
        <Input
          type='text'
          element='radio-group'
          label='Number of time:'
          name='wateringTime'
          id='typeTime'
          validators={[VALIDATOR_REQUIRE]}
          errorText='Please select a value.'
          onInput={inputHandler}
          options={[
            {
              id: 'wateringOnceMonth',
              value: 'onceMonth',
              label: 'Once a month',
            },
            {
              id: 'wateringTwiceMonth',
              value: 'twiceMonth',
              label: 'Twice a month',
            },
            {
              id: 'wateringOnceAWeek',
              value: 'onceWeek',
              label: 'Once a week',
            },
            {
              id: 'wateringTwiceAWeek',
              value: 'twiceWeek',
              label: 'Twice a week',
            },
            { id: 'everyDay', value: 'all', label: 'Every Days' },
          ]}
        ></Input>
      </Modal>

      <div className='calendar-container'>
        <Button onClick={addNewEventModalHandler}>Add New Event</Button>
        <Calendar
          date={date}
          localizer={localizer}
          startAccessor='start'
          endAccessor='end'
          onNavigate={onNavigate}
          events={events}
          selectable
          components={{ event: CustomEvent }}
        />
      </div>
    </Fragment>
  );
};

export default Canlendar;
