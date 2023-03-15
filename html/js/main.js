document.addEventListener("DOMContentLoaded", function(event) {
  // Your code here
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(DrawSVGPlugin);

  const mainTl = gsap.timeline();

  const splitTitle = new SplitText("h1", {
    type: "words, chars",
  });
  const splitSubtitle = new SplitText(".welcome__time p", {
    type: "words",
  });
  const charsTitle = splitTitle.chars;
  const charsSubtitle = splitSubtitle.words;
  mainTl.from(charsTitle, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50%",
    ease: "back",
    stagger: 0.15,
  });

  mainTl.from(
    ".photo_right",
    {
      duration: 1,
      opacity: 0,
      rotate: 0,
      x: "50%",
      y: "-5%",
    },
    "<.5"
  );
  mainTl.from(
    ".photo_left",
    {
      duration: 1.2,
      opacity: 0,
      rotate: -20,
      y: "-20vh",
    },
    "<.5"
  );
  mainTl.from(
    ".photo_bottom",
    {
      duration: 1,
      opacity: 0,
      rotate: 0,
      y: "20vh",
      x: "50%",
    },
    "<.5"
  );

  mainTl.from(charsSubtitle, {
    duration: 0.8,
    opacity: 0,
    scaleY: 0,
    //height: 0,
    //y: 80,
    //rotationX: 180,
    transformOrigin: "top",
    ease: "back",
    stagger: 0.2,
  });

  mainTl.from(".welcome__time time", {
    duration: 1.2,
    opacity: 0,
    scale: 0,
    transformOrigin: "bottom center",
    ease: "back.out(1.7)",
  });

  mainTl.from(".welcome__more", {
    duration: 1,
    opacity: 0,
  });

  const starsWelcome = Array.from(document.querySelectorAll(".star"));
  gsap.set(starsWelcome, {
    transformOrigin: "center center",
    scale: 0,
  });
  starsWelcome.forEach((star, index) => {
    const starTl = gsap.timeline({
      repeat: -1,
      repeatDelay: gsap.utils.random(0.5, 2),
      delay: gsap.utils.random(0.1, 1) * index,
    });
    starTl.set(star, {
      scale: 0,
    });
    starTl.to(star, {
      scale: 1,
    });
    starTl.to(star, {
      duration: 1,
      scale: gsap.utils.random(1.1, 1.5),
    });
    starTl.to(star, {
      duration: 0.3,
      scale: 0,
    });
  });
  const infinityTl = gsap.timeline();
  infinityTl.to(".welcome__arrow", {
    repeat: -1,
    y: -10,
    yoyo: true,
    //yoyoEase: "circ.out",
  });

  // WAIT
  const splitWaitTitle = new SplitText(".wait__wrapper h2", {
    type: "words, chars",
  });
  const charsWaitTitle = splitWaitTitle.chars;
  const wordsWaitTitle = splitWaitTitle.words;
  const animationWait = gsap.timeline();
  animationWait.from(wordsWaitTitle, {
    duration: 0.8,
    opacity: 0,
    y: "-100%",
    transformOrigin: "bottom center",
    ease: "back",
    stagger: 0.15,
  });
  animationWait.from(".wait__wrapper p", {
    y: "50%",
    opacity: 0,
  });
  ScrollTrigger.create({
    trigger: ".wait__wrapper",
    start: "top 80%",
    end: "top center",
    //markers: true,
    scrub: true,
    animation: animationWait,
  });

  // WHEN

  //const whenTl = gsap.timeline();

  //whenTl.from(".when h2", {
  //  x: "-50%",
  //  opacity: 0,
  //}, '<.2');
  //whenTl.from(".when .section__info", {
  //  x: "-50%",
  //  opacity: 0,
  //}, '<.2');
  //whenTl.from(".when .section__alt", {
  //  x: "-50%",
  //  opacity: 0,
  //}, '<.2');

  //ScrollTrigger.create({
  //  trigger: ".when__content",
  //  start: "bottom 80%",
  //  end: "bottom 80%",
  //  animation: whenTl
  //})

  // CLOTHES
  const splitClothesTitle = new SplitText(".clothes__wrapper h2", {
    type: "words, chars",
  });
  const charsClothesTitle = splitClothesTitle.chars;
  const wordsClothesTitle = splitClothesTitle.words;
  const animationClothes = gsap.timeline();
  animationClothes.from(wordsClothesTitle, {
    duration: 0.8,
    opacity: 0,
    y: "-100%",
    transformOrigin: "bottom center",
    ease: "back",
    stagger: 0.15,
  });
  animationClothes.from(".clothes__header p", {
    y: "50%",
    opacity: 0,
  });
  ScrollTrigger.create({
    trigger: ".clothes__wrapper",
    start: "top 80%",
    end: "top center",
    //markers: true,
    scrub: true,
    animation: animationClothes,
  });

  const rainbowAnimate = gsap.timeline({
    repeat: -1,
    yoyo: true
  });
  rainbowAnimate.to(".clothes__image img", {
    rotate: "15deg",
    //duration: 0,
    duration: .8,
    ease: "steps(2)",
  });
  //rainbowAnimate.to(".clothes__image img", {
  //  rotate: '-15deg',
  //  duration: 0
  //});
  const rainbowCreateAnimate = gsap.timeline();
  rainbowCreateAnimate.from(".clothes__image", {
    x: "100vw"
  })
  ScrollTrigger.create({
    trigger: ".clothes__image",
    start: "top 80%",
    end: "bottom 80%",
    //markers: true,
    scrub: true,
    animation: rainbowCreateAnimate
  });

  // APPEAL
  ScrollTrigger.create({
    trigger: ".appeal__body h2",
    start: "top 80%",
    animation: gsap.from(".appeal__body h2", {
      opacity: 0
    }),
  });
  const appeals = Array.from(document.querySelectorAll(".appeal__item"));
  appeals.forEach((appeal) => {
    const appealTl = gsap.timeline();
    const subtitle = appeal.querySelector("h3");
    const text = appeal.querySelector("p");    
    appealTl.from(appeal, {
      opacity: 0
    });
    appealTl.from(subtitle, {
      opacity: 0,
    })
    appealTl.from(text, {
      opacity: 0,
      y: '50%'
    })
    ScrollTrigger.create({
      trigger: appeal,
      start: "top 80%",
      animation: appealTl
    });
  });
  const starsAppeal = [
    document.querySelector("#star-right"),
    document.querySelector("#star-left"),
    document.querySelector("#star-top"),
  ];
  gsap.set(starsAppeal, {
    transformOrigin: "center center",
    scale: 0,
  });
  starsAppeal.forEach((star, index) => {
    const starTl = gsap.timeline({
      repeat: -1,
      repeatDelay: gsap.utils.random(0.5, 2),
      delay: gsap.utils.random(0.1, 1) * index,
    });
    starTl.set(star, {
      scale: 0,
    });
    starTl.to(star, {
      scale: 1,
    });
    starTl.to(star, {
      duration: 1,
      drawSVG: "0%",
      scale: gsap.utils.random(1.1, 1.5),
    });
  });

  gsap.set("#cup-right", {
    transformOrigin: "bottom center",
  });
  gsap.to("#cup-right", {
    duration: 1,
    //drawSVG: "0%",
    rotate: -15,
    repeat: -1,
    yoyo: true,
    yoyoEase: "slow(0.7, 0.7, false)",
  });
  gsap.set("#cup-left", {
    transformOrigin: "bottom center",
  });
  gsap.to("#cup-left", {
    duration: 1,
    //drawSVG: "0%",
    rotate: 15,
    repeat: -1,
    yoyo: true,
    yoyoEase: "slow(0.7, 0.7, false)",
  });


  const programItems = Array.from(document.querySelectorAll(".program__item"));
  programItems.forEach((item) => {
    const itemTl = gsap.timeline();
    const time = item.querySelector("time");
    const heart = item.querySelector("svg");
    const text = item.querySelector("p");
    itemTl.from(item, {
      opacity: 0,
    });
    itemTl.from(time, {
      opacity: 0,
      x: "-50%"
    })
    itemTl.from(text, {
      opacity: 0,
      x: "50%"
    }, '<')
    itemTl.from(heart, {
      scale: 0,
      ease: "back.out(4)",
    });
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      animation: itemTl,
    });
  });

  gsap.to(".seeyou__blob", {
    repeat: -1,
    duration: 5,
    scale: 1.3,
    x: "25%",
    rotate: 0,
    yoyo: true,
    yoyoEase: "slow(0.7, 0.7, false)",
  });
});

// Your functions here

