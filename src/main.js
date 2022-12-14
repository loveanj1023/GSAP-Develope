import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TweenMax } from 'gsap/TweenMax'

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TweenMax)
gsap.registerPlugin(DrawSVGPlugin)

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
  delay: 0,
  ease: 'power2.inOut',
  stagger: 0.3, // stagger start times
  rotation: 27,
  scrollTrigger: {
    markers: true,
    trigger: '.control',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: true,
  },
})

gsap.to('.head-image', {
  // selector text, Array, or object
  y: -500, // any properties (not limited to CSS)
  duration: 1, // seconds
  delay: 0,
  stagger: 0.3, // stagger start times
  ease: 'power2.inOut',
  rotation: 180,
  scrollTrigger: {
    markers: true,
    trigger: '.control',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: true,
  },
})

gsap.to('.head-image-2', {
  // selector text, Array, or object
  x: -1000, // any properties (not limited to CSS)
  duration: 1, // seconds
  delay: 0,
  stagger: 0.3, // stagger start times
  ease: 'power2.inOut',
  rotation: 180,
  scrollTrigger: {
    markers: true,
    trigger: '.control',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: true,
  },
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
  repeat: 100, // number of repeats (-1 for infinite)
  rotation: -10,
})
gsap.to('.two', {
  // selector text, Array, or object
  y: -20, // any properties (not limited to CSS)
  x: -50,
  repeat: 100,
  duration: 2, // seconds
  rotation: -50,
})

gsap.to('.could', {
  duration: 2,
  x: -100,
  ease: 'none',
  repeat: 100,
})

var tween = gsap.to('.moto', {
  duration: 4,
  x: 1920,
  ease: 'none',
  paused: true,
})

// click handlers for controlling the tween instance...
document.querySelector('#play').onclick = () => tween.play()
document.querySelector('#pause').onclick = () => tween.pause()
document.querySelector('#resume').onclick = () => tween.resume()
document.querySelector('#reverse').onclick = () => tween.reverse()
document.querySelector('#restart').onclick = () => tween.restart()
