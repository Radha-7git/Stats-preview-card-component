var tl = gsap.timeline();
tl.from(".custom-text p",{
  opacity:0,
  duration:0.7,
})
tl.from(".custom-text h3",{
  opacity:0,
  duration:0.7,
  stagger:0.3,
})
tl.from(".custom-text h1", {
  opacity: 0,
  duration: 1.2,
});