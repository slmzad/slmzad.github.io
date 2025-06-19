var smoother = ScrollSmoother.create({
    content: ".main",
    smooth: 2.5,
    effects: true,
});
var logo = document.querySelector(".acceuil")
var Carolinesury = document.querySelector(".Carolinesury");
var apropos = document.querySelector(".apropos");
var contact = document.querySelector(".contact");

apropos.addEventListener("click", function () {
    smoother.scrollTo("#section2", {
        duration: 1,
        ease: "power3.out",
    });
})

logo.addEventListener("click", function () {
    smoother.scrollTo("#section1", {
        duration: 1,
        ease: "power3.out",
    });
})

Carolinesury.addEventListener("click", function () {
    smoother.scrollTo("#section3", {
        duration: 1,
        ease: "power3.out",
    });
})

contact.addEventListener("click", function () {
    smoother.scrollTo("#section4", {
        duration: 1,
        ease: "power3.out",
    });
})

var E2sterput = document.querySelector(".reavel");
var E2sterputSplit = SplitText.create(E2sterput, {
    type: "chars"
})

gsap.from(E2sterputSplit.chars, {
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
    onComplete: function () {
        gsap.to(E2sterputSplit.chars, {
            y: "-25vh",
            duration: 1,
            stagger: 0.05,
            ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
            opacity: 0,
            filter: "blur(50px)",

        })

    }
})

gsap.to("#box", {
    delay: 2,
    height: 0,
    ease: "power3.inOut",
    duration: 1,
})

var animation = document.querySelector(".CAROLINE-SURY");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2,
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".CREATION");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2.3,
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".PUNK");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2.5,
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".ON-THE-SOUTH-SIDE");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2.5,
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".OF-FRANCE");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2.6,
    y: "25vh",
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".creative-vector");
var animationSplit = SplitText.create(animation, {
    type: "chars"
})

gsap.from(animationSplit.chars, {
    delay: 2.6,
    y: "25vh",
    duration: 0.7,
    stagger: 0.05,
    ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
    opacity: 0,
    filter: "blur(50px)",
})

var animation = document.querySelector(".titre3");
var animationSplit = SplitText.create(animation, {

    type: "chars"


})

Carolinesury.addEventListener("click", function () {
    smoother.scrollTo("#section3", {
        duration: 1,
        ease: "power3.out",
    });
    gsap.delayedCall(1, function () {
        var animation = document.querySelector(".titre3");
        var animationSplit = SplitText.create(animation, {
            type: "chars"
        });
        gsap.from(animationSplit.chars, {
            y: "25vh",
            duration: 0.3,
            stagger: 0.03,
            ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
            opacity: 0,
            filter: "blur(50px)",
        });
    });
});

var animation = document.querySelector(".contact2");
var animationSplit = SplitText.create(animation, {

    type: "chars"


})

contact.addEventListener("click", function () {
    smoother.scrollTo("#section4", {
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(animationSplit.chars, {
        delay: 0,
        y: "25vh",
        duration: 0.5,
        stagger: 0.05,
        ease: CustomEase.create("custom", "M0,0 C0.459,0 0.447,0.306 0.485,0.521 0.529,0.777 0.553,1 1,1 "),
        opacity: 0,
        filter: "blur(50px)",
    });
});

