const radioButtons = document.getElementsByName('header__slider-radio');
const labels = document.getElementsByClassName('bar');
const items = document.getElementsByClassName('header__slider-item');

function showSlide(index) {
    
    for (let i = 0; i < radioButtons.length; i++) {
        labels[i].classList.remove('bar-selected');
        items[i].classList.add('hide');
    }
    
    labels[index].classList.add('bar-selected');
    items[index].classList.remove('hide');

    // for (let i = 0; i < radioButtons.length; i++) {
    //     if (radioButtons[i].checked) {
    //         labels[i].classList.add('bar-selected');
    //         items[i].style.display = 'block';
    //     } else {
    //         labels[i].classList.remove('bar-selected');
    //         items[i].style.display = 'none';
    //     }
    // }
}