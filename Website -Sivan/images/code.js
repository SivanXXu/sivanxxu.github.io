function isElementVisibleOnScreen(element, threshold = 0) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    var vertInView = (rect.top + threshold <= windowHeight) && ((rect.top + rect.height - threshold) >= 0);
    var horInView = (rect.left + threshold <= windowWidth) && ((rect.left + rect.width - threshold) >= 0);

    return (vertInView && horInView);
}

function fadeElementInOnScroll() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        if (isElementVisibleOnScreen(element, 150)) { // minimum 100px of element needs to be visible
            element.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fadeElementInOnScroll();
    window.addEventListener('scroll', fadeElementInOnScroll);
});
