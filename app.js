/* || INTERSECTION OBSERVER */
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenEl = document.querySelectorAll('.effect')
hiddenEl.forEach((el)=> observer.observe(el))

/* || SCROLLER EFFECT */
const scrollers = document.querySelectorAll(".scroller")
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}
function addAnimation(){
    scrollers.forEach(scrollers =>{
        scrollers.setAttribute('data-animated',true)
        const scroller__inner = scrollers.querySelector(".scroller__inner")
        const scrollerContent = Array.from(scroller__inner.children)

        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute('aria-hidden',true)
            scroller__inner.append(duplicatedItem);
        })
    })
}

/* ||LOADER */
window.addEventListener("load", ()=>{
  const loadingNav = document.querySelectorAll(".loadnav")
  console.log(loadingNav)
  const loadingHero = document.querySelector(".loadhero")
    let hasloaded = false;
    const loader = document.querySelector(".loader")
 
    loader.classList.add('loader--hidden')
    loader.addEventListener("transitionend" ,()=>{
        document.body.removeChild(loader)
    })
    hasloaded = true;
    if(hasloaded){
      loadingHero.classList.toggle("reloading")
      loadingNav.forEach((item)=>{
        item.classList.toggle("reloading")
      })
    }
    
})
/* || MENU */
const Button= document.querySelector(".navigation__button");
const Open= document.querySelector(".Open");
const Close= document.querySelector(".Close");
const Body = document.querySelector(".body");

function toggleButton(){
  Body.classList.toggle("closed")
  Open.classList.toggle("hidden")
  Close.classList.toggle("hidden")
}
Button.addEventListener("click", ()=>{
    toggleButton()
})
function close_Nav(){
  toggleButton()
}

/* || HERO */
var int;
      function setInt() {
        clearInterval(int);
        int = setInterval(() => {
          var btns = document.getElementsByName("carousel");
          
          for (var i = 0; i < btns.length; i++) {
            if (btns[i].checked) {
              btns[i].checked = false;
              if (i + 1 == btns.length) {
                btns[0].checked = true;
              } else {
                btns[i + 1].checked = true;
              }
              return;
            }
          }
        }, 3500);
      }
      setInt();

/* FORM */
const formEl = document.querySelector(".form__container")
function open_Form(){
formEl.classList.remove("hidden")
}
function close_Form(){
formEl.classList.add("hidden")
}