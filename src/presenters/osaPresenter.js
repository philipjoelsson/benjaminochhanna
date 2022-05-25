import OsaView from './../views/osaView.js';
import React from 'react';
import { db } from './../firebaseConfig.js';

const OsaPresenter = () => {

  const [förnamn, setFörnamn] = React.useState("");
  const [efternamn, setEfternamn] = React.useState("");
  const [kommer, setKommer] = React.useState("Ja");
  const [speckost, setSpeckost] = React.useState("");
  const [mail, setMail] = React.useState("");

  const [submitted, setSubmitted] = React.useState(false);
  const [showAnmäld, setShowAnmäld] = React.useState(false);

  const handleSubmit = (e) => {


    e.preventDefault();

    var fnamn = false;
    var enamn = false;
    var mail_v = false;

    if (förnamn.length > 0) {
      fnamn = true;
    }

    if (efternamn.length > 0) {
      enamn = true;
    }

    if (mail.length > 0) {
      mail_v = true;
    }

    if (enamn && fnamn && mail_v) {

      document.getElementById('förnamn').style.borderColor = '#244056';
      document.getElementById('efternamn').style.borderColor = '#244056';
      document.getElementById('mail').style.borderColor = '#244056';

      setShowAnmäld(true);

      db.collection("Anmälda")
        .add({
          förnamn: förnamn,
          efternamn: efternamn,
          kommer: kommer,
          specialkost: speckost,
          mail: mail,
        })
        .then(() => {
          setTimeout(()=>setShowAnmäld(false), 5000)
        })
        .catch((error) => {
          alert(error.message);
        })


      setFörnamn("");
      setEfternamn("");
      setSpeckost("");
      setMail("");

    }

    if (fnamn) {
      document.getElementById('förnamn').style.borderColor = '#244056';
    }

    else {
      document.getElementById('förnamn').style.borderColor = '#ae2012';
    }

    if (enamn) {
      document.getElementById('efternamn').style.borderColor = '#244056';
    }

    else {
      document.getElementById('efternamn').style.borderColor = '#ae2012';
    }

    if (mail_v) {
      document.getElementById('mail').style.borderColor = '#244056';
    }

    else {
      document.getElementById('mail').style.borderColor = '#ae2012';
    }




  }

  return <OsaView setförnamn={(txt)=>setFörnamn(txt)}
                  setefternamn={(txt)=>setEfternamn(txt)}
                  setkommer={(x)=>setKommer(x)}
                  setspeckost={(x)=>setSpeckost(x)}
                  setmail={(txt)=>setMail(txt)}
                  förnamn={förnamn}
                  efternamn={efternamn}
                  speckost={speckost}
                  mail={mail}
                  showAnmäld={showAnmäld}
                  submit={handleSubmit}/>
}

export default OsaPresenter;
