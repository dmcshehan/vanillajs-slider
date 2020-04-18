var prevButton = document.querySelector('#prev');
var nextButton = document.querySelector('#next');
var imageWrapperList = document.querySelectorAll('#slider .slide-wrapper');


function removeEl(element) {
    element.classList.add('visuallyHidden');
    setTimeout(function() {
        element.classList.add('permanentlyHidden');
    }, 1000)
}

function bringEl(element) {
    element.classList.add('visuallyHidden');
    element.classList.remove('permanentlyHidden');
    setTimeout(function() {
        element.classList.remove('visuallyHidden');
    }, 500)
}

nextButton.addEventListener('click', function handleNextSlide() {

    for (let i = 0; i < imageWrapperList.length; i++) {
        if (!imageWrapperList[i].classList.contains('permanentlyHidden')) {
            removeEl(imageWrapperList[i]);
            if (i == imageWrapperList.length - 1) {
                bringEl(imageWrapperList[0]);
            } else {
                bringEl(imageWrapperList[i + 1]);
            }
            return;
        }
    }
})

prevButton.addEventListener('click', function handleNextSlide() {

    for (let i = 0; i < imageWrapperList.length; i++) {
        if (!imageWrapperList[i].classList.contains('permanentlyHidden')) {
            removeEl(imageWrapperList[i]);
            if (i == 0) {
                bringEl(imageWrapperList[imageWrapperList.length - 1]);
            } else {
                bringEl(imageWrapperList[i - 1]);
            }
            return;
        }
    }
})