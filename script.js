let color = "#28E98C";
let color2 = " rgb(93, 85, 85)";


const changerIcon = document.querySelectorAll(".feedback-changer i");
const feedbackBox = document.querySelectorAll(".feedback");
let clutter = 1;

const forwardButton = changerIcon[1];
const backwardButton = changerIcon[0];

forwardButton.addEventListener("click", () => {
  feedbackBox[0].style.transform = `translateY(-100%)`;
  feedbackBox[1].style.transform = `translateY(-100%)`;
  clutter = 2;
  let display = document.querySelector('.feedback-changer span');
  display.innerText = "2";
});

backwardButton.addEventListener("click", () => {
  feedbackBox[0].style.transform = `translateY(0%)`;
  feedbackBox[1].style.transform = `translateY(100%)`;
  clutter = 1;
  let display = document.querySelector('.feedback-changer span');
  display.innerText = "1";
});

gsap.from(".page1 .home, .page1 > h1, .page1 p", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.1,
});

gsap.to(".navigation-box i:first-child", {
  delay: 1,
  duration: 1,
  color: color,
});

gsap.from(".navigation-box i:first-child", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1",
    start: "60% 50%",
    end: "60% 40%",
    scrub: 2,
  },
  color:color
});

let timeline = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1",
    start: "20% top",
    end: "40% top",
    scrub: 2,
  },
});

timeline.from(
  ".page1 .experience-box",
  {
    x: -100,
    opacity: 0,
  },
  "timeline"
);

timeline.from(
  ".page1 .project-box",
  {
    y: 100,
    opacity: 0,
  },
  "timeline"
);

timeline.to(
  ".navigation-box i:nth-child(2)",
  {
    color: color,
  },
  "timeline"
);

timeline.to(
  ".navigation-box i:nth-child(1)",
  {
    color: color2,
  },
  "timeline"
);

gsap.from(".page2 .about-box, .page2 > h1, .page2 > p", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "-110% top",
    end: "0% top",
    scrub: 3,
  },
  y: 100,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".page3 .resume-box, .page3 > h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "-80% 20%",
    end: "-30% 20%",
    scrub: 2,
  },
  y: 200,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".page3 .sub-education-box", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  x: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.to(".navigation-box i:nth-child(3)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  color: color,
});

gsap.to(".navigation-box i:nth-child(2)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  color: color2,
});

gsap.from(".page4 .service-box,.page4 h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.to(".navigation-box i:nth-child(4)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  color: color,
});

gsap.to(".navigation-box i:nth-child(3)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "-10% 50%",
    end: "30% 20%",
    scrub: 2,
  },
  color: color2,
});

gsap.from(".page5 .skill-box, .page5 > h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page5",
    start: "-20% 50%",
    end: "0% 20%",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.to(".navigation-box i:nth-child(5)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page5",
    start: "-20% 50%",
    end: "0% 20%",
    scrub: 2,
  },
  color: color,
});

gsap.to(".navigation-box i:nth-child(4)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page5",
    start: "-20% 50%",
    end: "0% 20%",
    scrub: 2,
  },
  color: color2,
});

gsap.from(".page6 .portfolio-box, .page6 > h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6",
    start: "-5% 50%",
    end: "5% 20%",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
  stagger: 0.1,
});

gsap.to(".navigation-box i:nth-child(6)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6",
    start: "-5% 50%",
    end: "5% 20%",
    scrub: 2,
  },
  color: color,
});

gsap.to(".navigation-box i:nth-child(5)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6",
    start: "-5% 50%",
    end: "5% 20%",
    scrub: 2,
  },
  color: color2,
});

gsap.from(".page7 .testimonial-box, .page7 > h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7",
    start: "-30% 50%",
    end: "-10% 20%",
    scrub: 2,
  },
  x: 100,
  opacity: 0,
  stagger: 0.1,
});

gsap.to(".navigation-box i:nth-child(7)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7",
    start: "-30% 50%",
    end: "-10% 20%",
    scrub: 2,
  },
  color: color,
});

gsap.to(".navigation-box i:nth-child(6)", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7",
    start: "-30% 50%",
    end: "-10% 20%",
    scrub: 2,
  },
  color: color2,
});

let timeline3 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".page8",
    start: "-5% 50%",
    end: "10% 50%",
    scrub: 2,
  },
});

timeline3.from(
  ".page8 .pricing-box, .page8 h1",
  {
    y: 100,
    opacity: 0,
  },
  "timeline3"
);

timeline3.to(".navigation-box i:nth-child(8)", {
  color: color,
});

timeline3.to(".navigation-box i:nth-child(7)", {
  color: color2,
});

