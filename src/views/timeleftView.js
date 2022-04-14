const TimeleftView = (props) => {

  return <div className="countdown">
            <div className="timer-element"> <div>{props.days}</div> <div>Dagar</div> </div>
            <div className="timer-element"> <div>{props.hours}</div> <div>Timmar</div> </div>
            <div className="timer-element"> <div>{props.minutes}</div> <div>Minuter</div> </div>
            <div className="timer-element"> <div>{props.seconds}</div> <div>Sekunder</div> </div>
          </div>

}

export default TimeleftView;
