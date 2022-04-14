import OnskelistaView from './../views/onskelistaView.js';
import React from 'react';
import { getDatabase, ref, onValue, get} from "firebase/database";
import { database } from './../firebaseConfig.js'


const OnskelistaPresenter = () => {

  function readfromFirebase(){
    console.log(get(ref(database, 'onskelista/onskningar/0')));
  }

  readfromFirebase();

  return <div> </div>
}

export default OnskelistaPresenter;
