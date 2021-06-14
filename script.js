gsap.registerPlugin();

ScrollTrigger.matchMedia({
	
  // large screens
  "(min-width: 960px)": function() {
    gsap.registerPlugin(ScrollTrigger);

    const imgs = gsap.utils.toArray(".work__project__imgContainer");

    imgs.forEach(element => {
      gsap.from(element, {
        toggleActions: "play pause resume reset",
        scrollTrigger: element,
        duration: 1,
        y: 200
      })
    });

    const projectText = gsap.utils.toArray(".work__project__info");

    projectText.forEach(element => {
      gsap.from(element, {
        toggleActions: "play pause resume reset",
        scrollTrigger: element,
        duration: 1,
        x: -200
      })
    });
    },

	
  // all screens
  "all": function() {
    gsap.from(".about__info__line", {
      scrollTrigger: ".about__info__line",
      duration: 1.5,
      opacity: 0,
      stagger: .2,
    })
  }
	
}); 