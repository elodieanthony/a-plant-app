  // move to utils
  export const getIntervalDates = (date, endDate, interval) => {
    let setget = { set: 'setDate', get: 'getDate' };
    let recurrentDays = [];

    while (date < endDate) {
      recurrentDays.push(new Date(date));
      date[setget.set](date[setget.get]() + interval);
    }
    return recurrentDays;
  };