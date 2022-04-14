import OsaView from './../views/osaView.js';
import React from 'react';
import { db } from './../firebaseConfig.js';

const OsaPresenter = () => {

  const [förnamn, setFörnamn] = React.useState("");
  const [efternamn, setEfternamn] = React.useState("");
  const [kommer, setKommer] = React.useState("Ja");
  const [speckost, setSpeckost] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [övrigt, setÖvrigt] = React.useState("");

  const [submitted, setSubmitted] = React.useState(false);
  const [showAnmäld, setShowAnmäld] = React.useState(false);

  const handleSubmit = (e) => {

    setSubmitted(true);
    setTimeout(()=> setShowAnmäld(true), 500);
    setTimeout(()=> {setSubmitted(false); setShowAnmäld(false)}, 5000);

    e.preventDefault();

    db.collection("Anmälda")
      .add({
        förnamn: förnamn,
        efternamn: efternamn,
        kommer: kommer,
        email: mail,
        specialkost: speckost,
        övrigt: övrigt
      })
      .then(() => {
        setSubmitted(true);
        setTimeout(()=>setSubmitted(false), 5000)
      })
      .catch((error) => {
        alert(error.message);
      })


    setFörnamn("");
    setEfternamn("");
    setSpeckost("");
    setMail("");
    setÖvrigt("");
  }

  return <OsaView setförnamn={(txt)=>setFörnamn(txt)}
                  setefternamn={(txt)=>setEfternamn(txt)}
                  setkommer={(x)=>setKommer(x)}
                  setspeckost={(x)=>setSpeckost(x)}
                  setmail={(x)=>setMail(x)}
                  setövrigt={(x)=>setÖvrigt(x)}
                  förnamn={förnamn}
                  efternamn={efternamn}
                  speckost={speckost}
                  mail={mail}
                  övrigt={övrigt}
                  submitted={submitted}
                  showAnmäld={showAnmäld}
                  submit={handleSubmit}/>
}

export default OsaPresenter;
