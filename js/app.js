window.onload = function() {
  animateLogo();

  animateRobot();
}

function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1});
  t.to("#android-robot",1,{rotation: "-=15deg"});
}

function animateLogo() {
  TweenMax.fromTo(".react-logo",3, {
      // from
      css: {
        y: "-300px",
      }
    },{
      // to
      css: {
        y: "-250px",
      },

      // option to repeat animation forever
      repeat: -1,

      // option to reverse the animation and rerun
      yoyo: true,

      ease: Power2.easeInOut
    }
  );
}
