import './../style.css';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const TopbarView = (props) => {



  return (
    <div className="topbar">
      <LinkR to="/home" onClick={()=>scroll.scrollToTop()} className="title">
        Benjamin & Hanna
      </LinkR>
      <div className="menu">
        {props.menu.map((item, index) =>
          <span key={index}>
            <LinkS to={item} smooth={true} duration={1000} className="menu_item" offset={-100}>
                {item}
            </LinkS>
          </span>
        )

        }

      </div>
      <LinkS to="osa" smooth={true} duration={1000} className="OSA" offset={-100}>
          OSA
      </LinkS>

    </div>
  )

}

export default TopbarView;
