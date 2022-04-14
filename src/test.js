import backgroundVideo from './pexels-video.mp4';
import birdVideo from './pexels-bird.mp4';

const Test = () => {

  var frameNumber = 0;
  var playbackConst = 0;

  const myFunction = () => {
    var vid = document.getElementById("v0");
    var height = 10000;

    playbackConst = height/Math.floor(vid.duration);
    console.log(playbackConst);

    window.requestAnimationFrame(scrollPlay);
  }

  function scrollPlay(){
    var vid = document.getElementById("v0");

    var frameNumber  = window.pageYOffset/playbackConst;
    vid.currentTime  = parseFloat(frameNumber).toPrecision(3);
    window.requestAnimationFrame(scrollPlay);
  }

  return (
    <div>
      <span id="set-height">
        <video muted id="v0" tabIndex="0" autobuffer='autobuffer' preload='preload' onLoadedData={()=>myFunction()}>
          <source src={birdVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'  />
        </video>
      </span>
    </div>

  )
}

export default Test;
