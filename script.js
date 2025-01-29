// Timeline 1 
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,

    }
})

tl.to("#fanta", {
    // duration: 2.5,
    // ease: "power1.out",
    top: "120%",
    left: "0%"
}, 'affect')
tl.to("#orange-cut", {
    top: "160%",
    left: "23%"
}, 'affect')
tl.to("#orange", {
    top: "170%",
    right: "15%",
    width: '15%',
}, 'affect')
tl.to("#leaf", {
    top: "110%",
    rotate: '110deg',
    left: "85%",
}, 'affect')
tl.to("#leaf2", {
    top: "110%",
    rotate: '110deg',
    left: "5%",
}, 'affect')

// Timeline 2 
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
    }
})
tl2.to("#fanta", {
    width: '36%',
    top: "215%",
    left: "32%",
    ease: "linear",
}, 'three')
tl2.to("#orange-cut", {
    width: '20%',
    top: "204%",
    left: "40%",
    ease: 'linear',
    rotate: '90deg'
}, 'three')
tl2.from(".lemon1", {
    top: "-80%",
    left: "-50%",
    rotate: '-180deg'
},'three')
tl2.from("#cocacola", {
    top: "110%",
    left: "-50%",
    rotate: '-180deg'
},'three')

tl2.from(".lemon2", {
    top: "110%",
    left: "150%",
    rotate: '180deg'
},'three')
tl2.from("#pepsi", {
    top: "110%",
    left: "150%",
    rotate: '180deg'
},'three')



