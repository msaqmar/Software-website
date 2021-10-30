let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '0%',
        end: '50%',
        scrub: 1,
        

    },
});



let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.top-poster',
        start: '50%',
        end: '120%',
        scrub: 1,

    },
});

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.main-about-us',
        start: '0%',
        end: '100%',
        scrub: 1,

    },
});





tl.fromTo('#sidelogo', {x: -100, opacity: 0}, {x: 0, opacity: '100%'})

tl.fromTo('#main-img', {x: -100, opacity: 0}, {x: 0, opacity: '100%'})
tl.fromTo('#main-para-h1', {y: 100, opacity: 0}, {y: 0, opacity: '100%'});
tl.fromTo('#main-para-p', {y: 100, opacity: 0}, {y: 0, opacity: '100%'});
tl.fromTo('#main-page-btn1', {y: 100, opacity: 0}, {y: 0, opacity: '100%'});


tl.fromTo('.social-media-icons', {x: -100}, {x: 0});

tl3.fromTo('#about-img', {y: 100, opacity: 0}, {y: 0, opacity: '100%'})
tl3.fromTo('#about-h1', {x: -100, opacity: 0}, {x: 0, opacity: '100%'})
tl3.fromTo('#about-p', {x: -100, opacity: 0}, {x: 0, opacity: '100%'})
tl3.fromTo('#main-page-btn2', {y: 100, opacity: 0}, {y: 0, opacity: '100%'})
tl3.fromTo('.back-to-top', {x: 100, opacity: 0}, {x:0, opacity: '100%'})



tl4.fromTo('#sec-h1', {y: 100, opacity: 0}, {y:0, opacity: '100%'})
tl4.fromTo('#sec-p', {y: 100, opacity: 0}, {y:0, opacity: '100%'})

tl4.fromTo('#products-img-1',{x: -100, opacity: 0}, {x:0, opacity: '100%'})
tl4.fromTo('#products-text-1',{x: -100, opacity: 0}, {x:0, opacity: '100%'})

tl4.fromTo('#products-img-2',{x: -100, opacity: 0}, {x:0, opacity: '100%'})
tl4.fromTo('#products-text-2',{x: -100, opacity: 0}, {x:0, opacity: '100%'})

tl4.fromTo('#products-img-3',{x: -100, opacity: 0}, {x:0, opacity: '100%'})
tl4.fromTo('#products-text-3',{x: -100, opacity: 0}, {x:0, opacity: '100%'})

tl4.fromTo('#products-img-4',{x: -100, opacity: 0}, {x:0, opacity: '100%'})
tl4.fromTo('#products-text-4',{x: -100, opacity: 0}, {x:0, opacity: '100%'})

tl4.fromTo('#products-img-5',{x: -100, opacity: 0}, {x:0, opacity: '100%'})
tl4.fromTo('#products-text-5',{x: -100, opacity: 0}, {x:0, opacity: '100%'})









