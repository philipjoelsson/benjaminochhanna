import TopbarView from './../views/topbarView.js';

const TopbarPresenter = () => {

  const menu = ["Anmälan", "Gästinformation", "Önskelista", "Vigsel", "Fest"]

  return <TopbarView menu={menu}/>
}

export default TopbarPresenter;
