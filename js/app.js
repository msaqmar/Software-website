let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '0%',
        end: '50%',
        scrub: 1,
        

    },
});

tl.fromTo('#sidelogo', {x: -500}, {x: 0})

tl.fromTo('#main-img', {opacity: 0}, {opacity: '100%'})
tl.fromTo('.main-para', {y: 1000}, {y: 0});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '0%',
        end: '100%',
        scrub: 1,

    },
});
tl2.fromTo('.social-media-icons', {x: -100}, {x: 0});

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.main-main-section',
        start: '0%',
        end: '100%',
        scrub: 1,
        // pin: true,
        // pinSpacing: false,

    },
});

// tl3.fromTo('#main-img', {opacity: 100}, {opacity: 0})
// tl3.fromTo('.main-para', {x: 0}, {x: 1000});