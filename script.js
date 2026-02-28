gsap.registerPlugin(ScrollTrigger)


/* INTRO ANIMATION */

const timeline = gsap.timeline()

timeline

.to(".letter",{
opacity:1,
y:0,
stagger:0.05,
duration:1,
ease:"power3.out"
})

.to(".stat",{
opacity:1,
y:0,
stagger:0.2,
duration:0.8,
ease:"power2.out"
},"-=0.4")



/* SCROLL ANIMATION */

gsap.to("#car",{

x:window.innerWidth + 700,
rotation:6,
ease:"none",

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"+=1500",
scrub:true,
pin:true
}

})