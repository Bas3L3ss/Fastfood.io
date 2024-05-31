/* || INTERSECTION OBSERVER  REF#3*/
const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
    }
  });
});
const hiddenEl = document.querySelectorAll(".effect");
hiddenEl.forEach((el) => observer.observe(el));

/* || SCROLLER EFFECT REFJS#5  */
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scrollers) => {
    scrollers.setAttribute("data-animated", true);
    const scroller__inner = scrollers.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scroller__inner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scroller__inner.append(duplicatedItem);
    });
  });
}

/* || LOADER REFJS#1*/
window.addEventListener("load", () => {
  const loadingNav = document.querySelectorAll(".loadnav");
  const loadingHero = document.querySelector(".loadhero");
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
  loadingHero.classList.toggle("reloading");
  loadingNav.forEach((item) => {
    item.classList.toggle("reloading");
  });
});

/* || goUp BUTTON REFJS#0 */
const upDom = document.querySelector(".up");
const heroDom = document.querySelector(".main__hero");
const footerDom = document.querySelector("footer");
window.addEventListener("scroll", () => {
  if (window.scrollY >= heroDom.offsetHeight) {
    if (window.scrollY >= footerDom.offsetTop - footerDom.offsetHeight) {
      upDom.classList.add("hiddenUp");
    } else {
      upDom.classList.remove("hiddenUp");
    }
  } else {
    upDom.classList.add("hiddenUp");
  }
});

/* || MENU REFJS#4 */
const Button = document.querySelector(".navigation__button");
const Open = document.querySelector(".Open");
const Close = document.querySelector(".Close");
const Body = document.querySelector(".body");

function toggleButton() {
  Body.classList.toggle("closed");
  Open.classList.toggle("hidden");
  Close.classList.toggle("hidden");
}
Button.addEventListener("click", () => {
  toggleButton();
});
function close_Nav() {
  toggleButton();
}
/* || MENU_HEIGHT_CHANGE REFJS#2 */
const navWrapperDom = document.querySelector(".navigation .wrapper");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 0) {
    navWrapperDom.classList.add("heightChange");
  } else {
    navWrapperDom.classList.remove("heightChange");
  }
});
/* || HERO  REFJS#6*/
let carouselRunTime = 5000;
let carouselTrigger;
document.addEventListener("DOMContentLoaded", () => {
  CarouselActivate(carouselRunTime);
});
heroDom.addEventListener("mouseover", () => {
  CarouselActivate(99999999);
});
heroDom.addEventListener("mouseout", () => {
  CarouselActivate(carouselRunTime);
});
function CarouselActivate(adjustableValue) {
  clearInterval(carouselTrigger);
  carouselTrigger = setInterval(() => {
    let carouselButtonsDom = document.getElementsByName("carousel");
    for (let i = 0; i < carouselButtonsDom.length; i++) {
      if (carouselButtonsDom[i].checked) {
        carouselButtonsDom[i].checked = false;
        if (i + 1 == carouselButtonsDom.length) {
          carouselButtonsDom[0].checked = true;
        } else {
          carouselButtonsDom[i + 1].checked = true;
        }
        return;
      }
    }
  }, adjustableValue);
}

/* || FORM REFJS#7 */
const formEl = document.querySelector(".form__container");
function open_Form() {
  formEl.classList.remove("hidden");
}
function close_Form() {
  formEl.classList.add("hidden");
}
/* || triggerMenu REFJS#8 */
const menuStateDom = document.querySelectorAll("#state");
const triggerStateDom = document.querySelectorAll(".triggerState");
const firstTriggerStateDomPosition = triggerStateDom[0].offsetTop / 2;
for (let i = 0; i < menuStateDom.length; i++) {
  window.addEventListener("scroll", () => {
    const triggerStateDomPosition = triggerStateDom[i].offsetTop;
    const triggerStateDomPositionEnd =
      triggerStateDom[i].offsetTop + triggerStateDom[i].offsetHeight;
    if (window.scrollY >= triggerStateDomPosition * 0.95) {
      resetState();
      menuStateDom[i].classList.add("stateTriggered");
    }
    if (
      window.scrollY > triggerStateDomPositionEnd ||
      window.scrollY < firstTriggerStateDomPosition
    ) {
      resetState();
    }
  });
}

const resetState = () => {
  for (let j = 0; j < menuStateDom.length; j++) {
    menuStateDom[j].classList.remove("stateTriggered");
  }
};
