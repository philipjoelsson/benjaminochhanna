import SpexView from './../views/spexView.js';
import React from 'react';
import { db } from './../firebaseConfig.js';

const SpexPresenter = () => {

  const [namn, setNamn] = React.useState('');
  const [tid, setTid] = React.useState('');
  const [utrustning, setUtrustning] = React.useState('');

  const closeJustin = () => {
    document.getElementById('easterEgg2').style.left = '300vw';
    document.getElementById('justinBlom').pause();
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    var namn_b = false;

    if (namn.length > 0 && (/[A-Za-z]/).test(namn)) {
      namn_b = true;
    }

    if (namn_b) {

      if (namn == 'Sexyback') {
        document.getElementById('easterEgg2').style.left = '0px';
        document.getElementById('justinBlom').play();
      }

      else {

        document.getElementById('spex-namn').style.borderColor = '#244056';

        db.collection("Spex")
          .add({
            namn: namn,
            tid: tid,
            utrustning: utrustning,
          })
          .catch((error) => {
            alert(error.message);
          })
      }

      setNamn('');
      setTid('');
      setUtrustning('');

    }

    else {
      document.getElementById('spex-namn').style.borderColor = '#ae2012';
    }


  }

  return <SpexView setNamn={setNamn}
                   setTid={setTid}
                   setUtrustning={setUtrustning}
                   namn={namn}
                   tid={tid}
                   utrustning={utrustning}
                   handleSubmit={handleSubmit}
                   closeJustin={()=>closeJustin()}/>
}

export default SpexPresenter;
