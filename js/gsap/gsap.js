gsap.registerPlugin(ScrollTrigger);
gsap.from(".gsap-target-skill", {
    y: 100,
    autoAlpha: 0,
    delay: 0.6,
    stagger: {
        each: 0.2
      },
    scrollTrigger: {
        trigger: ".gsap-scrolltrigger-skill"
    }
});

const experiences = gsap.utils.toArray(".gsap-target-experience");
experiences.forEach((target) => {
    gsap.from(target, 0.8,{
        y: 100,
        autoAlpha: 0,
        delay: 0.6,
        scrollTrigger: {
            trigger: target,
        }
    });
});