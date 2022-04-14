const OsaView = (props) => {

  return (

    <div className="osa-container">
      <div className="osaview1" style={{height: props.submitted ? "500px" : "450px"}}>
        <div className="osa-titel"> OSA </div>
        <form onSubmit={props.submit} >
          <div className="userinput">
            <div>
              <input type="radio" className="radio-btn" onClick={()=>props.setkommer("Ja")} name="kommer" id="kommer" defaultChecked/>
              <span> Jag kommer! </span>
              <input type="radio" className="radio-btn"  onClick={()=>props.setkommer("Nej")} name="kommer" id="kommerinte"/>
              <span> Jag kommer inte </span>
            </div>
            <div className="input-box">
              <div className="input-namn">
                <div className="input-title req"> Förnamn </div>
                <input className="input-namn2" onChange={(e)=>props.setförnamn(e.target.value)} placeholder="Förnamn" value={props.förnamn} required/>
              </div>
              <div className="input-namn">
                <div className="input-title req"> Efternamn </div>
                <input className="input-namn2" onChange={(e)=>props.setefternamn(e.target.value)} placeholder="Efternamn" value={props.efternamn} required/>
              </div>
              <div className="input1">
                <div className="input-title req"> E-post </div>
                <input className="input2" onChange={(e)=>props.setmail(e.target.value)} placeholder="E-mail" value={props.mail} required/>
              </div>
              <div className="input1">
                <div className="input-title"> Specialkost </div>
                <input className="input2" onChange={(e)=>props.setspeckost(e.target.value)} placeholder="Specialkost" value={props.speckost}/>
              </div>
              <div className="input1">
                <div className="input-title"> Annat </div>
                <input className="input2" onChange={(e)=>props.setövrigt(e.target.value)} placeholder="Annat" value={props.övrigt}/>
              </div>
            </div>
            <div> <button className="osa-btn" type="submit"> Skicka </button> </div>
            <div className="osa-anmäld" style={{display: props.showAnmäld ? "flex" : "none"}}> Anmäld! </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OsaView;
