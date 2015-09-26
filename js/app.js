window.onload = function() {
  animateLogo();

  animateRobot();

  updateSliderControl();

  addSmoothScrolling();
}

window.onscroll = function() {
  updateSliderControl();
}

function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1});
  t.to("#android-robot",0.5,{rotation: "-50deg"})
    .to("#android-robot",0.5,{rotation: "-40deg"});
}

function animateLogo() {
  TweenMax.fromTo(".react-logo",3, {
      // from
      css: {
        y: "20px",
      }
    },{
      // to
      css: {
        y: "50px",
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
    var sectionBottom = section.offsetTop + section.offsetHeight;

    // Check if window.scrollY is between the section.
    var scrolly = Math.round(window.scrollY);
    console.log(scrolly);
    console.log(sectionTop);
    console.log(sectionBottom);

    if(scrolly >= sectionTop && scrolly < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }

  }
}

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var topOfElement = element.offsetTop;

  TweenMax.to(window, 1, {
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    (function(link) {
      link.addEventListener("click",function(event) {
      // `event` is the mouse click event
        event.preventDefault();
        var sectionId = link.attributes[0].value.substring(1);
        scrollToElement(sectionId);
        return false;
      })
    })(link);
  }
}
