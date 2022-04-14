import { ref, get} from "firebase/database";
import { database } from './../firebaseConfig.js'


const OnskelistaPresenter = () => {

  function readfromFirebase(){
    console.log(get(ref(database, 'onskelista/onskningar/0')));
  }

  readfromFirebase();

  return <div> </div>
}

export default OnskelistaPresenter;
