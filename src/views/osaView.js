const OsaView = (props) => {

  return (

    <div className='osa-page'>
      <div className='osa-title'> OSA </div>
      <div className='osa-senast'> Senast 30:e juni </div>
      <form onSubmit={props.submit}>
        <div className='osa-radio-div'>
          <div className='osa-radio-divs' onClick={()=>props.setkommer('Ja')}>
            <input type='radio' className='osa-radio-btn' name='kommer' id='kommer' defaultChecked />
            <label htmlFor='kommer' className='osa-radio-text'> Jag kommer! </label>
          </div>
          <div className='osa-radio-divs' onClick={()=>props.setkommer('Nej')}>
            <input type='radio' className='osa-radio-btn' name='kommer' id='kommer-inte' />
            <label htmlFor='kommer-inte' className='osa-radio-text'> Jag kommer inte </label>
          </div>
        </div>
        <div className='osa-namn-div'>
          <div className='osa-namn'>
            <div className='osa-namn-text'> Förnamn </div>
            <input id='förnamn' className='osa-namn-input' value={props.förnamn} onChange={(e)=>props.setförnamn(e.target.value)} placeholder='Förnamn' />
          </div>
          <div className='osa-namn'>
            <div className='osa-namn-text'> Efternamn </div>
            <input id='efternamn' className='osa-namn-input' value={props.efternamn} onChange={(e)=>props.setefternamn(e.target.value)} placeholder='Efternamn' />
          </div>
        </div>
        <div className='osa-mail'>
          <div className='osa-mail-text'> Mail </div>
          <input id='mail' className='osa-mail-input' value={props.mail} onChange={(e)=>props.setmail(e.target.value)} placeholder='Mail' />
        </div>
        <div className='osa-allergier'>
          <div className='osa-allergier-text'> Eventuella allergier </div>
          <input className='osa-allergier-input' value={props.speckost} onChange={(e)=>props.setspeckost(e.target.value)} placeholder='Specialkost'/>
        </div>
        <div>
          {props.showAnmäld ? <div className='osa-visa-anmäld'> Anmäld </div> : <div> </div> }
          <button className='osa-button' type='submit'> SKICKA </button>
        </div>
      </form>
    </div>

  )
}

export default OsaView;
