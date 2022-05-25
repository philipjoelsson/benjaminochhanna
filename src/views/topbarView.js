import './../style.css';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const TopbarView = (props) => {


  return (
    <div className="topbar">
      <div className="menu">
        {props.menu.map((item, index) =>
          <span key={index}>
            <LinkS to={item} onClick={()=>props.onPress()} smooth={true} duration={1000} className="menu_item">
                {item}
            </LinkS>
          </span>
        )

        }
      </div>
      <div className='burger' onClick={()=>props.onPress()}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  )

}

export default TopbarView;
