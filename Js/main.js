let slider = document.querySelector(".slider"),
  slides = Array.from(document.querySelectorAll(".slider .item")),
  prev = document.querySelector(".slider .prev"),
  dotsCont = document.querySelector(".slider ul"),
  next = document.querySelector(".slider .next"),
  currIndex = 0;
for (let i = 1; i <= slides.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("index", i);
  currIndex == li.getAttribute("index")
    ? li.classList.add("active")
    : li.classList.remove("active");
  dotsCont.append(li);
}
let dots = document.querySelectorAll(".slider ul li");
function checker() {
  if (currIndex == slides.length - 1) {
    next.classList.add("dis");
  } else {
    next.classList.remove("dis");
  }
  if (currIndex == 0) {
    prev.classList.add("dis");
  } else {
    prev.classList.remove("dis");
  }
  dots.forEach((ele) => {
    ele.getAttribute("index") - 1 == currIndex
      ? ele.classList.add("active")
      : ele.classList.remove("active");
  });
  let curr = document.querySelector(".curr");
  curr.innerHTML = `Slide #${currIndex + 1} of ${slides.length}`;
}
checker();

function nextS() {
  if (currIndex !== slides.length - 1) {
    console.log(currIndex);
    slides[currIndex].classList.remove("active");
    slides[++currIndex].classList.add("active");
  }
  checker();
  dots.forEach((ele) => {
    ele.getAttribute("index") - 1 == currIndex
      ? ele.classList.add("active")
      : ele.classList.remove("active");
  });
}
function prevS() {
  if (currIndex !== 0) {
    console.log(currIndex);
    slides[currIndex].classList.remove("active");
    slides[--currIndex].classList.add("active");
  }
  checker();
}
dots.forEach((ele) => {
  ele.onclick = (e) => {
    dots.forEach((ele) => ele.classList.remove("active"));
    currIndex = e.target.getAttribute("index") - 1;
    console.log(currIndex);
    checker();
    e.target.classList.add("active");
    slides.forEach((ele) => ele.classList.remove("active"));
    slides[currIndex].classList.add("active");
  };
});
prev.onclick = prevS;
next.onclick = nextS;
//

let toggler = document.querySelector(".toggler"),
  nav = document.querySelector("header ul"),
  bodyElements = Array.from(document.body.children);
// toggler = document.querySelector('.toggler');
let clickNum = 0;
toggler.addEventListener("click", (_) => {
  nav.classList.toggle("active");
  toggler.classList.toggle("active");
  let scroll = scrollY || pageYOffset || document.documentElement.scrollTop;
  onscroll = function () {
    clickNum % 2 !== 0
      ? scrollTo({
          top: scroll,
        })
      : "";
  };
  for (let i = 0; i < bodyElements.length; i++) {
    bodyElements[i].classList.toggle("active");
  }
  clickNum++;
});
onscroll = function () {};
