import { createContext } from 'react';

export const CalendarContext = createContext({
  events: [
    {
      plantName: null,
      type: null,
      numberOfTime: 0,
      //   beginingTime: null,
      //   endTime: null,
    },
  ],
  addEvent: () => {},
  editEvent: () => {},
  removeEvent: () => {},
});
