const TimeleftView = (props) => {

  return <div className="timer-section">
            <div className="timer-element">
              <div className='timer-element-time'>{props.days}</div>
              <div className='timer-element-string'>Dagar</div>
            </div>
            <div className="timer-element">
              <div className='timer-element-time'>{props.hours}</div>
              <div className='timer-element-string'>Timmar</div>
            </div>
            <div className="timer-element">
              <div className='timer-element-time'>{props.minutes}</div>
              <div className='timer-element-string'>Minuter</div>
            </div>
            <div className="timer-element">
              <div className='timer-element-time'>{props.seconds}</div> 
              <div className='timer-element-string'>Sekunder</div>
            </div>
          </div>

}

export default TimeleftView;
