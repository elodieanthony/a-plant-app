import { Fragment, useState, useContext, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Button from '../components/formElements/Button';
import Modal from '../components/UIElements/Modal';
import Input from '../components/formElements/Input';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../util/validators';
import { CalendarContext } from '../context/calendar-context';

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

  // move to utils
  const getIntervalDates = (date, endDate, interval) => {
    let setget = { set: 'setDate', get: 'getDate' };
    let recurrentDays = [];

    while (date < endDate) {
      recurrentDays.push(new Date(date));
      date[setget.set](date[setget.get]() + interval);
    }
    return recurrentDays;
  };

  const eventIcon = type => {
    switch (type) {
      case 'watering':
        return (
          <svg className='svg-icon' viewBox='0 0 20 20'>
            <path
              fill='white'
              d='M10,16.513c-2.249,0-4.071-1.822-4.071-4.07c0-0.226-0.182-0.407-0.407-0.407c-0.225,0-0.407,0.182-0.407,0.407c0,2.697,2.187,4.885,4.885,4.885c0.225,0,0.407-0.183,0.407-0.407S10.225,16.513,10,16.513M10,1.044c-0.814,0-6.513,6.92-6.513,11.398c0,3.597,2.916,6.513,6.513,6.513c3.597,0,6.513-2.916,6.513-6.513C16.513,7.964,10.813,1.044,10,1.044 M10,18.141c-3.148,0-5.699-2.65-5.699-5.92C4.301,8.372,9.593,2.011,10,2.011c0.407,0,5.698,6.36,5.698,10.209C15.698,15.49,13.147,18.141,10,18.141'
            ></path>
          </svg>
        );
      case 'fertilizer':
        return (
          <svg className='svg-icon' viewBox='0 0 512 512'>
            <path
              fill='white'
              d='M241.421 494.904a13.544 13.544 0 0 0-.815-2.673 14.03 14.03 0 0 0-1.315-2.471 14.384 14.384 0 0 0-1.772-2.174c-3.316-3.315-8.248-4.831-12.893-3.901-.915.186-1.815.456-2.687.813a14.519 14.519 0 0 0-4.632 3.087 14.264 14.264 0 0 0-1.772 2.174 15.184 15.184 0 0 0-1.315 2.471 14.503 14.503 0 0 0-1.101 5.475c0 3.759 1.529 7.447 4.188 10.106a14.4 14.4 0 0 0 10.106 4.188c3.76 0 7.447-1.528 10.106-4.188a14.402 14.402 0 0 0 4.188-10.106c0-.942-.1-1.871-.286-2.801zM271.28 452.021a14.335 14.335 0 0 0-.815-2.672c-.357-.858-.8-1.687-1.315-2.471-.529-.772-1.115-1.517-1.787-2.174a14.345 14.345 0 0 0-2.173-1.771 14.448 14.448 0 0 0-2.459-1.316 14.398 14.398 0 0 0-2.673-.813 14.135 14.135 0 0 0-5.589 0 14.474 14.474 0 0 0-5.146 2.129c-.786.527-1.515 1.114-2.173 1.771s-1.258 1.401-1.772 2.174a15.184 15.184 0 0 0-1.315 2.471 14.503 14.503 0 0 0-1.101 5.475c0 .929.1 1.858.286 2.787.186.915.457 1.815.815 2.673.357.858.8 1.687 1.315 2.471a14.384 14.384 0 0 0 1.772 2.174 13.606 13.606 0 0 0 2.173 1.772 14.474 14.474 0 0 0 5.146 2.128c.915.187 1.858.286 2.787.286 3.774 0 7.447-1.528 10.106-4.188.672-.657 1.258-1.401 1.787-2.174.515-.786.958-1.615 1.315-2.471.357-.859.629-1.758.815-2.673.186-.929.272-1.858.272-2.787 0-.942-.086-1.871-.271-2.801zM301.127 494.904a14.473 14.473 0 0 0-3.902-7.318c-3.331-3.315-8.262-4.831-12.907-3.901-.901.186-1.801.456-2.673.813a14.519 14.519 0 0 0-4.632 3.087 15.32 15.32 0 0 0-1.787 2.174 15.184 15.184 0 0 0-1.315 2.471 14.503 14.503 0 0 0-.815 2.673 14.194 14.194 0 0 0-.272 2.802c0 3.759 1.529 7.447 4.188 10.106a13.705 13.705 0 0 0 2.173 1.772c.772.513 1.601.958 2.459 1.315.872.357 1.772.628 2.673.813.929.187 1.872.286 2.802.286.929 0 1.872-.099 2.787-.286a14.474 14.474 0 0 0 5.146-2.128 13.76 13.76 0 0 0 2.173-1.772 14.4 14.4 0 0 0 4.188-10.106 14.375 14.375 0 0 0-.286-2.801zM485.712 214.31 275.591 4.187a14.293 14.293 0 0 0-20.216 0L26.288 233.272c-5.582 5.582-5.582 14.633 0 20.216l163.589 163.591a14.295 14.295 0 0 0 10.107 4.187h93.066c3.791 0 7.427-1.507 10.107-4.187L485.71 234.525c5.584-5.583 5.584-14.634.002-20.215zM298.504 381.304 174.081 256.881c-5.582-5.58-14.633-5.58-20.216 0-5.582 5.582-5.582 14.633 0 20.216l115.579 115.579h-63.539L56.61 243.381 265.482 34.51l189.907 189.907-156.885 156.887z'
            />
            <path
              fill='white'
              d='M147.666 233.871a14.744 14.744 0 0 0-.815-2.674c-.357-.858-.8-1.687-1.315-2.459a13.76 13.76 0 0 0-1.772-2.173c-.658-.673-1.401-1.258-2.173-1.787a14.48 14.48 0 0 0-5.146-2.13 14.135 14.135 0 0 0-5.589 0c-.915.186-1.815.457-2.673.815-.858.357-1.687.8-2.473 1.315-.772.529-1.515 1.113-2.173 1.787a13.606 13.606 0 0 0-1.772 2.173 14.443 14.443 0 0 0-1.315 2.459 14.814 14.814 0 0 0-.815 2.673 14.194 14.194 0 0 0-.272 2.802c0 .929.086 1.874.272 2.787.186.915.457 1.817.815 2.673s.8 1.687 1.315 2.473c.515.77 1.115 1.515 1.772 2.173 2.659 2.659 6.346 4.174 10.106 4.174.943 0 1.872-.086 2.802-.27a14.48 14.48 0 0 0 2.673-.815 15.276 15.276 0 0 0 2.473-1.315 15.159 15.159 0 0 0 2.173-1.772 15.267 15.267 0 0 0 1.772-2.173c.515-.788.958-1.617 1.315-2.473s.629-1.758.815-2.673c.186-.915.272-1.858.272-2.787a14.272 14.272 0 0 0-.272-2.803zM350.764 160.432c-2.544-1.781-8.01-4.986-15.403-5.899-.913-7.393-4.118-12.859-5.899-15.403-11.791-16.837-38.475-23.987-57.103-15.3-2.813 1.315-8.322 4.448-12.809 10.392-6.858-2.903-13.196-2.863-16.289-2.591-20.477 1.791-40.011 21.325-41.804 41.802-.27 3.093-.312 9.432 2.593 16.289-5.942 4.487-9.078 9.996-10.39 12.81-8.686 18.629-1.537 45.313 15.302 57.103 2.544 1.781 8.01 4.986 15.403 5.899.915 7.391 4.118 12.86 5.899 15.403 8.363 11.943 24.22 19.014 39.38 19.012 6.212 0 12.308-1.186 17.723-3.712 2.814-1.312 8.325-4.445 12.81-10.39 6.857 2.903 13.195 2.865 16.289 2.591 20.477-1.791 40.01-21.325 41.802-41.802.27-3.093.312-9.433-2.593-16.289 5.943-4.488 9.078-9.996 10.39-12.812 8.687-18.63 1.537-45.314-15.301-57.103zm-10.607 45.023c-1.634 3.501-6.529 4.187-14.555 2.037-7.623-2.047-15.463 2.481-17.506 10.107a14.234 14.234 0 0 0-.49 3.699c-.004 6.315 4.208 12.095 10.599 13.806 8.025 2.151 11.924 5.193 11.587 9.041-.595 6.795-9.019 15.219-15.815 15.813-3.842.36-6.89-3.562-9.041-11.587-2.043-7.624-9.883-12.148-17.507-10.107-6.389 1.711-10.602 7.491-10.598 13.806 0 1.221.159 2.464.49 3.699 2.15 8.026 1.465 12.923-2.035 14.557-6.182 2.882-17.69-.2-21.604-5.789-2.216-3.165-.36-7.747 5.515-13.622a14.247 14.247 0 0 0 4.187-10.107c0-3.658-1.395-7.316-4.187-10.107-5.582-5.58-14.633-5.58-20.216 0-5.875 5.875-10.456 7.727-13.622 5.515-5.589-3.912-8.672-15.422-5.789-21.604 1.634-3.501 6.529-4.187 14.555-2.035 7.627 2.045 15.463-2.481 17.507-10.107.332-1.235.49-2.477.49-3.699.004-6.315-4.208-12.096-10.597-13.806-8.026-2.151-11.924-5.193-11.587-9.041.595-6.797 9.019-15.22 15.815-15.815 3.851-.35 6.89 3.562 9.041 11.587 2.04 7.624 9.877 12.15 17.504 10.107 6.389-1.711 10.602-7.491 10.599-13.806 0-1.221-.159-2.464-.49-3.699-2.15-8.026-1.465-12.923 2.037-14.557 6.178-2.886 17.69.2 21.602 5.789 2.217 3.165.36 7.749-5.515 13.623a14.25 14.25 0 0 0-4.187 10.107c0 3.659 1.397 7.316 4.187 10.107 5.582 5.58 14.633 5.58 20.214 0 5.876-5.875 10.46-7.73 13.623-5.515 5.589 3.913 8.673 15.421 5.789 21.603z'
            />
          </svg>
        );
      case 'repoting':
        return (
          <svg className='svg-icon' viewBox='0 0 512 512'>
            <path
              fill='white'
              d='M366.545 250.182v29.091h-93.091v-14.191c25.204-7.53 43.636-30.915 43.636-58.537 0-4.477-.841-9.158-2.259-13.895 4.737 1.418 9.42 2.259 13.895 2.259 33.685 0 61.091-27.405 61.091-61.091s-27.406-61.091-61.091-61.091c-4.477 0-9.158.841-13.895 2.259 1.418-4.737 2.259-9.42 2.259-13.895C317.091 27.405 289.685 0 256 0s-61.091 27.405-61.091 61.091c0 4.477.841 9.158 2.259 13.895-4.737-1.418-9.42-2.259-13.895-2.259-33.685 0-61.091 27.405-61.091 61.091s27.406 61.091 61.091 61.091c4.477 0 9.158-.841 13.895-2.259-1.418 4.737-2.259 9.42-2.259 13.895 0 27.621 18.432 51.007 43.636 58.537v14.191h-93.091v-29.091c0-32.081-26.1-58.182-58.182-58.182v34.909c12.833 0 23.273 10.44 23.273 23.273V384h16.74l4.308 73.235C133.4 487.944 158.911 512 189.675 512h132.65c30.764 0 56.275-24.056 58.082-54.765L384.714 384h16.74V250.182c0-12.833 10.44-23.273 23.273-23.273V192c-32.081 0-58.182 26.1-58.182 58.182zm-37.818-142.546c14.436 0 26.182 11.745 26.182 26.182S343.163 160 328.727 160c-7.848 0-27.435-12.156-45.466-26.182 18.032-14.027 37.619-26.182 45.466-26.182zM256 34.909c14.436 0 26.182 11.745 26.182 26.182 0 7.848-12.155 27.436-26.182 45.466-14.028-18.032-26.182-37.618-26.182-45.466 0-14.437 11.746-26.182 26.182-26.182zM183.273 160c-14.436 0-26.182-11.745-26.182-26.182s11.746-26.182 26.182-26.182c7.848 0 27.435 12.157 45.466 26.182C210.707 147.846 191.12 160 183.273 160zm46.545 46.545c0-7.848 12.155-27.436 26.182-45.466 14.028 18.032 26.182 37.618 26.182 45.466 0 14.437-11.746 26.182-26.182 26.182s-26.182-11.744-26.182-26.182zm115.738 248.64c-.72 12.283-10.925 21.905-23.231 21.905h-132.65c-12.305 0-22.511-9.622-23.232-21.907L162.254 384h187.491l-4.189 71.185zm20.989-106.094h-221.09v-34.909H366.546v34.909z'
            />
          </svg>
        );
      default:
        return;
    }
  };

  const addNewEventSubmitHandler = event => {
    event.preventDefault();

    let today = new Date();
    let nextDate = new Date(new Date().setDate(today.getDate() + 60));
    let eventDates;
    let newEvent = {
      plantName: formState.inputs.name.value,
      type: formState.inputs.type.value,
      numberOfTime: formState.inputs.typeTime.value,
    };

    calendar.addEvent(newEvent);

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

    let eventTitle = formState.inputs.name.value;
    let eventType = formState.inputs.type.value;

    eventDates.map(date =>
      setEvents(prev => [
        ...prev,
        {
          start: date,
          end: date,
          title: eventTitle,
          type: eventType,
        },
      ])
    );
  };

  const CustomEvent = props => {
    return (
      <div className='custom-event'>
        <h4>{props.title}</h4>
        <div className='custom-event__icon'>{eventIcon(props.event.type)}</div>
      </div>
    );
  };

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
          id='name'
          element='input'
          label='Plant name'
          validators={[VALIDATOR_REQUIRE]}
          errorText='Please enter a valid name.'
          onInput={inputHandler}
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
