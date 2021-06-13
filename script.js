ScrollTrigger.matchMedia({
	
  // large
  "(min-width: 960px)": function() {
    gsap.registerPlugin(ScrollTrigger);

    const imgs = gsap.utils.toArray(".work__project__imgContainer");

    imgs.forEach(element => {
      gsap.from(element, {
        scrollTrigger: element,
        duration: 1,
        y: 200
      })
    });

    const projectText = gsap.utils.toArray(".work__project__info");

    projectText.forEach(element => {
      gsap.from(element, {
        scrollTrigger: element,
        duration: 1,
        x: -200
      })
    });
    },

  // medium
  "(min-width: 600px) and (max-width: 959px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
  },

  // small
  "(max-width: 599px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
  },
	
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
    gsap.from(".about__info__line", {
      scrollTrigger: ".about__info__line",
      duration: 1.5,
      opacity: 0,
      stagger: .2,
    })
  }
	
}); 