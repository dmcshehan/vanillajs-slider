var prevButton = document.querySelector('#prev');
var nextButton = document.querySelector('#next');
var imageWrapperList = document.querySelectorAll('#slider .slide-wrapper');


function removeEl(element) {
    element.classList.add('visuallyHidden');
    setTimeout(function () {
        element.classList.add('permanentlyHidden');
    }, 1000)
}

function bringEl(element) {
    element.classList.add('visuallyHidden');
    element.classList.remove('permanentlyHidden');
    setTimeout(function () {
        element.classList.remove('visuallyHidden');
    }, 500)
}

nextButton.addEventListener('click', function handleNextSlide() {

    for (let i = 0; i < imageWrapperList.length; i++) {
        if (!imageWrapperList[i].classList.contains('permanentlyHidden')) {
            imageWrapperList[i].classList.toggle('permanentlyHidden');
            if (i == imageWrapperList.length - 1) {
                imageWrapperList[0].classList.toggle('permanentlyHidden');
            } else {
                imageWrapperList[i + 1].classList.toggle('permanentlyHidden');
            }
            return;
        }
    }
})

prevButton.addEventListener('click', function handleNextSlide() {
    for (let i = 0; i < imageWrapperList.length; i++) {
        if (!imageWrapperList[i].classList.contains('permanentlyHidden')) {
            imageWrapperList[i].classList.toggle('permanentlyHidden');
            if (i == 0) {
                imageWrapperList[imageWrapperList.length - 1].classList.toggle('permanentlyHidden');
            } else {
                imageWrapperList[i - 1].classList.toggle('permanentlyHidden');
            }
            return;
        }
    }
})