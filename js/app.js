window.onload = function() {
  animateLogo();

  animateRobot();

  updateSliderControl();
}

window.onscroll = function() {
  updateSliderControl();
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

function updateSliderControl() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var sectionName = link.attributes[0].value.substring(1);

    var section = document.getElementById(sectionName);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.clientHeight;

    // Check if window.scrollY is between the section.
    var scrolly = Math.round(window.scrollY);
    if(scrolly >= sectionTop && scrolly < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }

  }
}
