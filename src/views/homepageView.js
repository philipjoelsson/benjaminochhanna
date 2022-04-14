import TimeleftPresenter from './../presenters/timeleftPresenter.js';
import OsaPresenter from './../presenters/osaPresenter.js';
import VigselPresenter from './../presenters/vigselPresenter.js';
import FestPresenter from './../presenters/festPresenter.js';


const HomepageView = () => {

  return <div>
          <section className="titleSection" id="Gästinformation">
            <div>
              Benjamin & Hanna
            </div>
            <div className="datum">
              30/7 2022
            </div>
          </section>
          <section className="one" id="Anmälan">
            <div>
              <img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="picture"/>
            </div>
          </section>

          <section className="two">
            <div>
              Vår resa började...
            </div>
          </section>
          <section className="timeLeft">
            <TimeleftPresenter />
          </section>
          <section className="onskelista" id="Önskelista">
            <h1 className="vigsel-titel"> Önskelista </h1>
            <div className="onsk-titel"> Önskelista </div>
            <div className="onsk-text"> Om du skulle vilja ge oss något så har vi gjort en önskelista som du hittar på knappen nedan. Glöm inte att fylla i antalet köpta produkter "registera köp" i önskelistan. </div>
            <button className="onsk-btn" onClick={()=>window.open("https://google.se")}> Önskelista </button>
          </section>
          <section className="vigsel" id="Vigsel">
            <VigselPresenter />
          </section>
          <section className="vigsel" id="Fest">
            <FestPresenter />
          </section>
          <section className="osaview" id="osa">
            <OsaPresenter />
          </section>
         </div>
}

export default HomepageView;
