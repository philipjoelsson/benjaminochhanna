import TimeleftView from './../views/timeleftView.js';
import React from 'react';

const TimeleftPresenter = () => {

  const [textDay, setTextDay] = React.useState();
  const [textHour, setTextHour] = React.useState();
  const [textMinute, setTextMinute] = React.useState();
  const [textSecond, setTextSecond] = React.useState();

  const getTime = () => {
    const countDate = new Date("July 30, 2022, 14:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = 60 * seconds;
    const hours = 60 * minutes;
    const days = 24 * hours;

    setTextDay(Math.floor(gap / days));
    setTextHour(Math.floor((gap % days) / hours));
    setTextMinute(Math.floor((gap % hours) / minutes));
    setTextSecond(Math.floor((gap % minutes) / seconds));
  };

  React.useEffect(() => {
    setInterval(()=>getTime(), 1000);
  }, [])

  return <TimeleftView days={textDay}
                       hours={textHour}
                       minutes={textMinute}
                       seconds={textSecond}/>
}


export default TimeleftPresenter;
