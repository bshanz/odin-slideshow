const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const slides = document.getElementById("slides-container");
const slideNumber = document.getElementById("slide-number");

// to keep track of slide postion in. Used in next and previous buttons
let slidePosition = "1";

//make next button change slides
next.addEventListener("click", () => {
  if (slidePosition === "1") {
    // hide pic1
    pic1.classList.remove("pic");
    pic1.classList.add("no-display");

    //show pic2
    pic2.classList.add("fade");
    pic2.classList.remove("no-display");
    pic2.classList.add("pic");

    // change slide position
    slidePosition = "2";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "2") {
    // hide pic2
    pic2.classList.remove("pic");
    pic2.classList.add("no-display");

    //show pic3
    pic3.classList.add("fade");
    pic3.classList.remove("no-display");
    pic3.classList.add("pic");

    // change slide position
    slidePosition = "3";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "3") {
    // hide pic3
    pic3.classList.remove("pic");
    pic3.classList.add("no-display");

    //show pic1
    pic1.classList.add("fade");
    pic1.classList.remove("no-display");
    pic1.classList.add("pic");

    // change slide position
    slidePosition = "1";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  }
});

//make previous button change slides
previous.addEventListener("click", () => {
  if (slidePosition === "1") {
    // hide pic1
    pic1.classList.remove("pic");
    pic1.classList.add("no-display");

    //show pic3
    pic3.classList.add("fade");
    pic3.classList.remove("no-display");
    pic3.classList.add("pic");

    // change slide position
    slidePosition = "3";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "2") {
    // hide pic2
    pic2.classList.remove("pic");
    pic2.classList.add("no-display");

    //show pic1
    pic1.classList.add("fade");
    pic1.classList.remove("no-display");
    pic1.classList.add("pic");

    // change slide position
    slidePosition = "1";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "3") {
    // hide pic3
    pic3.classList.remove("pic");
    pic3.classList.add("no-display");

    //show pic2
    pic2.classList.add("fade");
    pic2.classList.remove("no-display");
    pic2.classList.add("pic");

    // change slide position
    slidePosition = "2";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  }
});

//function for use in set interval
function autoSlideShow() {
  console.log("Delayed for 1 second.");
  if (slidePosition === "1") {
    // hide pic1
    pic1.classList.remove("pic");
    pic1.classList.add("no-display");

    //show pic2
    pic2.classList.add("fade");
    pic2.classList.remove("no-display");
    pic2.classList.add("pic");

    // change slide position
    slidePosition = "2";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "2") {
    // hide pic2
    pic2.classList.remove("pic");
    pic2.classList.add("no-display");

    //show pic3
    pic3.classList.add("fade");
    pic3.classList.remove("no-display");
    pic3.classList.add("pic");

    // change slide position
    slidePosition = "3";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  } else if (slidePosition === "3") {
    // hide pic3
    pic3.classList.remove("pic");
    pic3.classList.add("no-display");

    //show pic1
    pic1.classList.add("fade");
    pic1.classList.remove("no-display");
    pic1.classList.add("pic");

    // change slide position
    slidePosition = "1";

    //show the number slide
    slideNumber.innerHTML = `${slidePosition}/3`;
  }
}

// make slideshow move forward every 5-seconds
setInterval(autoSlideShow, 5000);
