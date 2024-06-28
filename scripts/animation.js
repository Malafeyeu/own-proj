
jQuery.noConflict();
const $ = window.jQuery;
const gsap = window.gsap;

// Функция работы с анимацией
const getAnimation = () => {
  const timeLine = gsap.timeline();

  timeLine.fromTo(
    '.branding__logo-P', 
    {
      x: -159
    }, 
    {
      x: 0,
      duration: 1
    },
    0.1
  ).fromTo(
    '.branding__logo-E',
    {
      y: 207,
    },
    { 
      y: 0,
      duration: 2
    },
    0.1
  ).fromTo(
    '.branding__logo-R',
    {
      y: -207,
    },
    {
      y: 0,
      duration: 2
    },
    0.1
  ).fromTo(
    '.branding__logo-F',
    {
      rotationY: 90,
    },
    {
      rotationY: 0,
      duration: 3
    },
    0.1
  ).fromTo(
    '.branding__logo-ellipse-img',
    {
      scale: -0.15,
    },
    {
      scale: 1,
      duration: 1.5
    },
    0.1
  ).fromTo(
    '.branding__logo-RMO .branding__logo-RMO_',
    {
      y: 220
    },
    {
      y: 0,
      stagger: 0.2,
      duration: 1.5
    },
    0.1
  ).fromTo(
    '.branding__line-image', 
    {
      height: 0,
      y: 500
    },
    {
      height: 550,
      y: 0,
      duration: 1
    },
    0.1
  )
}

getAnimation();