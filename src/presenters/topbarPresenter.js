import TopbarView from './../views/topbarView.js';

const TopbarPresenter = () => {

  const nav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu span');
    const topbar = document.querySelector('.topbar');


    nav.classList.toggle('menu-active');
    navLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = '';
      }
      else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });

    burger.classList.toggle('toggle');

  }

  const menu = ["Vigsel", "Fest", "Gästinformation", "OSA", "Spex"]

  return <TopbarView menu={menu}
                     onPress={()=>nav()}/>
}

export default TopbarPresenter;
