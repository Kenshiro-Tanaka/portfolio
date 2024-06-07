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

const skills = gsap.utils.toArray(".gsap-target-skill");
skills.forEach((target) => {
    gsap.from(target, 0.8,{
        y: 100,
        autoAlpha: 0,
        delay: 0.6,
        scrollTrigger: {
            trigger: target,
        }
    });
});