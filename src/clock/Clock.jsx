import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Clock.css';

const Clock = () => {
  const [clockState, setClockState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    amPm: 'AM',
    date: 'Day 00 Month 20XX',
    started: false,
  });

  function updateTime() {
    const now = new Date();
    const monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const newClockState = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      date: `${dayLabels[now.getDay()]} ${now.getDate()} ${monthLabels[now.getMonth()]} ${now.getFullYear()}`,
      started: true,
    }

    // Format hours and am/pm.
    if (newClockState.hours > 12) {
      newClockState.hours = newClockState.hours - 12;
      newClockState.amPm = 'PM';
    }

    // Format minutes.
    if (newClockState.minutes.toString().length === 1) {
      newClockState.minutes = `0${newClockState.minutes}`;
    }

    // Update state.
    setClockState({
      ...clockState,
      ...newClockState
    });

    // Start timeout
    const timeout = 60 - newClockState.seconds;

    setTimeout(() => {
      updateTime();
    }, timeout * 1000);
  }

  useEffect(() => {
    if (!clockState.started) updateTime();
  });

  return (
    <>
      {clockState.started && (
        <div className='clock'>
          <div className="clock__date">{clockState.date}</div>
          <div className="clock__time">
            <span className="clock__hours">{clockState.hours}</span>
            <span className="clock__separator">:</span>
            <span className="clock__minutes">{clockState.minutes}</span>
            &nbsp;
            <span className="clock__am-pm">{clockState.amPm}</span>
          </div>
        </div>
      )}
      <Helmet>
        <title>Clock ⏰ | {`${clockState.hours}:${clockState.minutes} ${clockState.amPm}`}</title>
      </Helmet>
    </>
  )
}

export default Clock;
