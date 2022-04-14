import './style.css';
import { Routes, Route, Navigate } from "react-router-dom";
import TopbarPresenter from './presenters/topbarPresenter.js';
import HomepagePresenter from './presenters/homepagePresenter.js';
import OsaPresenter from './presenters/osaPresenter.js';
import OnskelistaPresenter from './presenters/onskelistaPresenter.js';
import Test from './test.js';

const App = (props) => {

  return (

    <div>
      <div>
        <TopbarPresenter />
        <HomepagePresenter />*
      </div>

    </div>

  )
}

export default App;
