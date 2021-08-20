const bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;

const dots = document.getElementsByClassName('serf__map-dot');

function setSerfSelectedDot(index) {
    _setSerfSelectedDot(index)
    // slider
    _setSerfSliderElement(index);
}

function _setSerfSelectedDot(index) {
    selectedSerfDot = index
    for (let i = 0; i < dots.length; i++) dots[i].classList.add('hide-window');
    dots[index].classList.remove('hide-window');
}


// Slider 
const arrowLeft = document.getElementById('serf__slider-arrow-left');
const arrowRight = document.getElementById('serf__slider-arrow-right');
const slider = document.getElementById('serf__slider-items');
const sliderItems = document.getElementsByClassName('serf__slider-item');

const ITEMS_ON_PAGE = Math.round(bodyWidth / sliderItems[0].offsetWidth);
const ITEM_WIDTH_PERCENT = Math.round(sliderItems[0].offsetWidth / bodyWidth * 100);
const MAX_SLIDER_MARGIN_LEFT = -1 * (ITEM_WIDTH_PERCENT * sliderItems.length - (ITEM_WIDTH_PERCENT * ITEMS_ON_PAGE));
const MIN_SLIDER_MARGIN_LEFT = 0;

function setSerfSliderPosition(index) {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.add('serf__slider__visible-bg');
    }
    sliderItems[index].classList.remove('serf__slider__visible-bg');
    _setSerfSelectedDot(index);
}

function _setSerfSliderElement(index) {
    setSerfSliderPosition(index);
    const margin = ITEM_WIDTH_PERCENT * index * -1 <= MAX_SLIDER_MARGIN_LEFT ? 
    MAX_SLIDER_MARGIN_LEFT : ITEM_WIDTH_PERCENT * index * -1;
    _setSerfSliderMarginLeft(margin);
}

function _setSerfSliderMarginLeft(marginLeft) {
    slider.style.marginLeft = `${marginLeft}%`;
}

arrowLeft.addEventListener('click', event => {
    event.preventDefault();
    let currentMarginLeft = slider.style.marginLeft === "" ? 0 : Number.parseFloat(slider.style.marginLeft);
    
    if (currentMarginLeft < MIN_SLIDER_MARGIN_LEFT) {
        _setSerfSliderMarginLeft(currentMarginLeft + ITEM_WIDTH_PERCENT);
    }
});

arrowRight.addEventListener('click', event => {
    event.preventDefault();
    let currentMarginLeft = slider.style.marginLeft === "" ? 0 : Number.parseFloat(slider.style.marginLeft);
    
    if (currentMarginLeft > MAX_SLIDER_MARGIN_LEFT) {
        _setSerfSliderMarginLeft(currentMarginLeft - ITEM_WIDTH_PERCENT);
    }
});