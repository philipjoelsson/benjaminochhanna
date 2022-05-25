
const SpexView = (props) => {

  return (

    <div className='spex-page'>
      <div className='spex-title'> TAL OCH SPEX </div>
      <div className='spex-info'>
        Gästen gör festen! Så om ni har lust får ni gärna bidra till vår fest
        med spex, sång, lek, tal eller liknade! Anmäl er gärna på förhand så
        underlättar ni för våra värdar! 
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className='spex-input'>
          <div className='spex-input-title'> Namn </div>
          <input className='spex-input-input' id='spex-namn' value={props.namn} onChange={(e)=>props.setNamn(e.target.value)}/>
        </div>
        <div className='spex-input'>
          <div className='spex-input-title'> Uppskattad tid </div>
          <input className='spex-input-input' value={props.tid} onChange={(e)=>props.setTid(e.target.value)}/>
        </div>
        <div className='spex-input'>
          <div className='spex-input-title'> Vad behöver du/ni? T.ex. mickar, projektor? </div>
          <input className='spex-input-input' value={props.utrustning} onChange={(e)=>props.setUtrustning(e.target.value)}/>
        </div>
        <button className='spex-button' type='submit'> SKICKA </button>
      </form>
    </div>
  )
}

export default SpexView;