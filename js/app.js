window.onload = function() {
  animateLogo();
}

function animateLogo() {
  TweenMax.fromTo(".react-logo",3, {
      // from
      css: {
        top: "-20px",
      }
    },{
      // to
      css: {
        top: "10px",
      },

      // option to repeat animation forever
      repeat: -1,

      // option to reverse the animation and rerun
      yoyo: true,

      ease: Power2.easeInOut,
    }
  );
}
