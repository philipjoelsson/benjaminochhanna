const OnskelistaView = (props) => {

  return (
    <div className="onskelistaview">
      {Object.values(props.data).map((item, index)=>
        <div className="onskelista-item" key={index}>
          <span> {item[0]} </span>
          <span> {item[1] === 1 ? "" : "Antal: " + item[1]} </span>
          <a href={item[2]} target="_blank"> Exempel </a>
          <span> <img src={item[3]} className="onske-bild"/> </span>
          {item[4] ? <button className="reservera" onClick={()=>props.reservera(index)}> Reservera </button> : <button className="reservera reserverad"> Reserverad </button>}

        </div>
      )}

    </div>


  )
}

export default OnskelistaView;
