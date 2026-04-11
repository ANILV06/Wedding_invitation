import React from "react";
import Countdown from "react-countdown";
import './Countdown.css'
function Timer() {
  return (
<div className="countdown-card ">
            <span className="section-label">The Big Day</span>
            <p className="countdown-quote">The start of a beautiful journey, shared with the ones we <br /> love most</p>
            <p className="countdown-date">Sunday · 19th April 2026</p>
            <Countdown className="countdown-number" date={new Date("2026-04-19T09:00:00")} />  
            <p className="countdown-label">DAYS<span>- </span>HRS<span> - </span>MINS<span> -</span>SEC<span></span></p>    
        </div>
  );
}

export default Timer;