import moment from 'moment';
import React from 'react';

const LogsCalendar = () => {

    let todayDate = moment().format('ddd, Do MMM');

  return (

    <div className="d-flex align-items-center justify-content-evenly">
      <div>Today: {todayDate}</div>
      <div>Yerstaday: </div>
    </div>
  )
}

export default LogsCalendar
