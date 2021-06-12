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
  console.log(element);
  gsap.from(element, {
    scrollTrigger: element,
    duration: 1,
    x: -200
  })
});