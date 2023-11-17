function isElementVisibleOnScreen(element, threshold = 0) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    var vertInView = (rect.top + threshold <= windowHeight) && ((rect.top + rect.height - threshold) >= 0);
    var horInView = (rect.left + threshold <= windowWidth) && ((rect.left + rect.width - threshold) >= 0);

    return (vertInView && horInView);
}

function fadeElementInOnScroll() {
    var elements = document.querySelectorAll('.title');
    elements.forEach(function(element) {
        if (isElementVisibleOnScreen(element, 150)) { // minimum 100px of element needs to be visible
            element.classList.add('active');
        }
    });
    var elements2 = document.querySelectorAll('.title2');
    elements2.forEach(function(element) {
        if (isElementVisibleOnScreen(element, 150)) { // minimum 100px of element needs to be visible
            element.classList.add('active');
        }
    });
    var elements3 = document.querySelectorAll('.title3');
    elements3.forEach(function(element) {
        if (isElementVisibleOnScreen(element, 150)) { // minimum 100px of element needs to be visible
            element.classList.add('active');
        }
    });
}

function setClasses(el) {
    const isScrollable = el.scrollHeight > el.clientHeight;
    
    // GUARD: If element is not scrollable, remove all classes
    if (!isScrollable) {
      el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
      return;
    }
    
    // Otherwise, the element is overflowing!
    // Now we just need to find out which direction it is overflowing to (can be both)
    const isScrolledToBottom = el.scrollHeight <= el.clientHeight + el.scrollTop;
    const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
    el.classList.toggle('is-bottom-overflowing', !isScrolledToBottom);
    el.classList.toggle('is-top-overflowing', !isScrolledToTop);
  }
  
  document.querySelector('.blog').addEventListener('scroll', (e) => {
    const el = e.currentTarget;
    setClasses(el);
  });
  
  setClasses(document.querySelector('.blog'));


let intro = document.querySelector('.screen');
let logo = document.querySelector('.screenheader');
let logospan = document.querySelectorAll('.welcome');

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{

        logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            logospan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);

    })
})

document.addEventListener('DOMContentLoaded', function() {
    fadeElementInOnScroll();
    window.addEventListener('scroll', fadeElementInOnScroll);
});

const button = document.querySelector("#button");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const jsConfetti = new JSConfetti();

if (window.innerWidth > 1200) {
    button.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['🍁', '🀄'],
            confettiNumber: 10,
        });
    })
    
    button2.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['💻', '⚡️'],
            confettiNumber: 10,
        });
    })
    
    button3.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['♟️', '🤖', '✖️', '➗', '🏹'],
            confettiNumber: 15,
        });
    })
} else if (window.innerWidth < 1200){
    button.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['🍁', '🀄'],
            emojiSize: 50,
            confettiNumber: 10,
        });
    })
    
    button2.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['💻', '⚡️'],
            emojiSize: 50,
            confettiNumber: 10,
        });
    })
    
    button3.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['♟️', '🤖', '✖️', '➗', '🏹'],
            emojiSize: 50,
            confettiNumber: 15,
        });
    })
} else {
    button.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['🍁', '🀄'],
            emojiSize: 50,
            confettiNumber: 10,
        });
    })
    
    button2.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['💻', '⚡️'],
            emojiSize: 50,
            confettiNumber: 10,
        });
    })
    
    button3.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['♟️', '🤖', '✖️', '➗', '🏹'],
            emojiSize: 50,
            confettiNumber: 15,
        });
    })
}
