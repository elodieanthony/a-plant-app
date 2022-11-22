import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const Canlendar = props => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='calendar-container center'>
      <Calendar
        onChange={onChange}
        value={value}
        className='calendar'
        defaultView='week'
        onClickDay={(value, event) => {
          alert('Clicked day:', value);
        }}
      />
    </div>
  );
};

export default Canlendar;
