import './style.css';
import TopbarPresenter from './presenters/topbarPresenter.js';
import HomepagePresenter from './presenters/homepagePresenter.js';

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
