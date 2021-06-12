gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".work__project");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".work",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".work").offsetWidth
  }
});

