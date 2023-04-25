import { createContext } from 'react';

export const CalendarContext = createContext({
  events: [
    {
      plantName: null,
      type: null,
      eventDates: [],
    },
  ],
  addEvent: () => {},
  editEvent: () => {},
  removeEvent: () => {},
});
