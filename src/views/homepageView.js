import TimeleftPresenter from './../presenters/timeleftPresenter.js';
import OsaPresenter from './../presenters/osaPresenter.js';
import VigselPresenter from './../presenters/vigselPresenter.js';
import FestPresenter from './../presenters/festPresenter.js';
import SpexPresenter from './../presenters/spexPresenter.js';
import { animateScroll } from 'react-scroll';
import hannabenjamin from './../pictures/hannabenjamin2.jpg';
import blommor_mitten from './../pictures/Group 2.png';
import blommor_parbild from './../pictures/Group 3.png';
import blommor_bottom from './../pictures/blommor_bottom.png';
import kartavigsel from './../pictures/kartaVigsel.png';
import kartafest from './../pictures/kartaFest.png';
import { BsArrowUpCircleFill } from 'react-icons/bs';


const HomepageView = (props) => {

  return <div className='page'>
            <BsArrowUpCircleFill className='scrollToTop' onClick={()=>animateScroll.scrollToTop()}> </BsArrowUpCircleFill>
            <section className='first-page'>
              <div>
                <div className="first-page-title"> HANNA & BENJAMIN </div>
                <div className="first-page-date"> 30 juli 2022 </div>
              </div>
            </section>
            <section className='second-page' id='Vi'>
              <div className='second-page-imgs'>
                <img src={hannabenjamin} className='second-page-couple' id='hannabenjamin'/>
                <img src={blommor_parbild} className='second-page-blommor' onClick={()=> props.easterEgg()}/>
              </div>
              <div className='second-page-text'>
                <div className='second-page-title'> Vi gifter oss </div>
                <div className='second-page-info'>
                  <div>
                    Efter fem år som vänner och span lite sådär på avstånd har
                    vi äntligen fattat grejen och nu valt att spendera resten av
                    livet med varandra. Festligt, tycker vi!
                  </div>
                  <div>
                    Den 30 juli i år kommer vi gifta oss, och vi är så
                    taggade på att fira vår dag tillsammans med dig!
                  </div>
                  <div>
                    På den här sidan hittar du all information du kan tänkas
                    behöva veta inför dagen då vi blir ett. Det viktigaste du
                    behöver ha koll på är att vi önskar att du tar med dina
                    dansskor och ett riktigt glatt humör. Om du trots allt
                    skulle ha några frågor kan du kontakta våra fantastiska värdar
                    på lukas.1998@hotmail.com, så hjälper de dig.
                  </div>
                  <div>
                    Kram, Hanna och Benjamin
                  </div>
                </div>
              </div>
            </section>
            <section className='timeLeft'>
              <TimeleftPresenter />
            </section>
            <section className='vigsel-page' id='Vigsel'>
              <div className='vigsel-info'>
                <div className='vigsel-title'> VIGSEL </div>
                <div className='vigsel-date'> 14.00 - Snavlunda Kyrka </div>
                <div className='vigsel-text'>
                  Vigseln kommer att äga rum kl 14 i Snavlunda Kyrka, som ligger
                  en bit utanför Örebro. Efter vigseln kommer det bjudas på
                  tårta utanför kyrkan.
                </div>
                <div className='vigsel-text'>
                  Adress: Snavlunda Kyrkväg 2,
                  694 94 Vretstorp.
                </div>
              </div>
              <div className='vigsel-map-div'>
                <img className='vigsel-map' src={kartavigsel}></img>
              </div>
            </section>
            <section className='fest-page' id='Fest'>
              <div className='fest-info'>
                <div className='fest-title'> FEST </div>
                <div className='fest-date'> 17.00 - Edbergs bygdegård </div>
                <div className='fest-text'>
                  <div>
                    Bröllopsfesten kommer att vara vid Esbergs bygdegård, ca
                    20 minuter från kyrkan med bil.
                  </div>
                  <div>
                    Adress: Edsbergs bygdegård, 716 91 Fjugesta, Sverige
                  </div>
                </div>
              </div>
              <div className='fest-map-div'>
                <img className='fest-map' src={kartafest}></img>
              </div>
            </section>
            <section className='blommor-mitten-page'>
              <img src={blommor_mitten} className='blommor-mitten'/>
            </section>
            <section className='onskelista-page' id='Önskelista'>
              <div className='onskelista-title'> ÖNSKELISTA </div>
              <div className='onskelista-text'>
                Om du önskar ge oss något i present har
                vi skapat en lista på ting vi önskar oss,
                som du hittar genom att trycka på knappen nedan.
              </div>
              <button className='onskelista-btn' onClick={()=>window.open('https://presentlistan.nu/A51871/')}>
                ÖNSKELISTA
              </button>
            </section>
            <section className='bra-att-veta-page' id='Gästinformation'>
              <div className='bra-att-veta-title'> BRA ATT VETA </div>
              <div className='bra-att-veta-title2'> Klädsel: Kavaj </div>
              <div className='bra-att-veta-text'>
                För herrar innebär det kostym och för
                damer innebär det klänning, kjol eller byxdress.
              </div>
              <div className='bra-att-veta-title2'> Barn </div>
              <div className='bra-att-veta-text'>
                Hur mycket vi än gillar barn ser vi gärna att denna
                dag i största mån firas i vuxet sällskap. Välkomna
                att höra av er till oss om ni har frågor.
              </div>
            </section>
            <section id='OSA'>
              <OsaPresenter />
            </section>
            <section id='Spex'>
              <SpexPresenter />
            </section>
            <section className='bottom-page'>
            </section>
         </div>
}

export default HomepageView;
