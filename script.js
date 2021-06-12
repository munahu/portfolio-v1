gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about__info__line", {
    scrollTrigger: ".about__info__line",
    duration: 1.5,
    opacity: 0,
    stagger: .2,
  })


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