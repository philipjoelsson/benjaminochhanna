import HomepageView from './../views/homepageView.js';
import React from 'react';
import hannabenjamin from './../pictures/hannabenjamin2.jpg';

const HomepagePresenter = () => {

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 150) {
      document.querySelector('.scrollToTop').style.width = '50px';
    }
    else if (window.scrollY < 150) {
      document.querySelector('.scrollToTop').style.width = '0px';
    }
  });

  const easterEgg = () => {

    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      document.getElementById('hannabenjamin').src = 'http://media.tumblr.com/ebd189a10c5fcccaedf29cb2784b8024/tumblr_inline_n9dpb9G1Q91qkw1pn.gif';
    }

  };

  return <HomepageView easterEgg={()=>easterEgg()}/>
}

export default HomepagePresenter;
