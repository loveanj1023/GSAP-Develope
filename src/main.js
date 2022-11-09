import gsap from 'gsap'

gsap.to('.bike', { xPercent: 100, duration: 3, ease: 'power2.out' })

/* coding from the GSAP */

gsap.to /* I want this item to ...  */
gsap.from /* from the statu that i defined to another staus I want */
gsap.fromTo /* From the statu that I set to another Staus */
gsap.stagger /* divide different same class item */
gsap.to('.ball', {
  // selector text, Array, or object
  x: 100, // any properties (not limited to CSS)
  backgroundColor: 'red', // camelCase
  duration: 1, // seconds
  delay: 0.5,
  ease: 'power2.inOut',
  stagger: 0.2, // stagger start times
  repeat: 4, // number of repeats (-1 for infinite)
  rotation: 27,
})

gsap.to('.sun', {
  // selector text, Array, or object
  x: 50, // any properties (not limited to CSS)
  duration: 10, // seconds
  delay: 0.5,
  ease: 'power2.inOut',
  stagger: 0.2, // stagger start times
  repeat: 4, // number of repeats (-1 for infinite)
  rotation: 20,
})

gsap.to('.bird', {
  // selector text, Array, or object
  y: 100, // any properties (not limited to CSS)
  duration: 2, // seconds
  ease: 'power2.inOut',
  stagger: 1, // stagger start times
  repeat: 10, // number of repeats (-1 for infinite)
  rotation: -10,
})
gsap.to('.two', {
  // selector text, Array, or object
  y: -20, // any properties (not limited to CSS)
  x: -50,
  repeat: 10,
  duration: 2, // seconds
  rotation: -50,
})

gsap.to('.could', {
  duration: 2,
  x: -100,
  ease: 'none',
  repeat: 5,
})

var tween = gsap.to('.moto', {
  duration: 4,
  x: 950,
  ease: 'none',
  paused: true,
})

// click handlers for controlling the tween instance...
document.querySelector('#play').onclick = () => tween.play()
document.querySelector('#pause').onclick = () => tween.pause()
document.querySelector('#resume').onclick = () => tween.resume()
document.querySelector('#reverse').onclick = () => tween.reverse()
document.querySelector('#restart').onclick = () => tween.restart()
