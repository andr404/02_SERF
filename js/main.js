const headerBlock = document.getElementById('header');
const serfBlock = document.getElementById('serf');

const SCROLL_BEHAVIOR = {block: "start", behavior: "smooth"};

document.getElementById('header__go-to-serf').addEventListener('click', event => {
    event.preventDefault();
    serfBlock.scrollIntoView(SCROLL_BEHAVIOR);
})