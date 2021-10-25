let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '0%',
        end: '50%',
        scrub: 1,
        

    },
});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '50%',
        end: '100%',
        scrub: 1,

    },
});

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.main-main-section',
        start: '100%',
        end: '150%',
        scrub: 1,

    },
});





tl.fromTo('#sidelogo', {x: -500}, {x: 0})
tl.fromTo('.navlist', {y: 1000}, {y: 0})

tl.fromTo('#main-img', {x: -1000}, {x: 0})
tl.fromTo('.main-para', {y: 1000}, {y: 0});


tl2.fromTo('.social-media-icons', {x: -100}, {x: 0});


tl3.fromTo('.products-text', {y: 1000}, {y: 0})
tl3.fromTo('.products-img', {y: 1000}, {y: 0})









