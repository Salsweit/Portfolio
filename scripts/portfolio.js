let myButton = document.querySelector('.myBtn');

window.onscroll = function() {
    showBtnUp()
};

function showBtnUp() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myButton.classList.add('is-show');
    } else {
        myButton.classList.remove('is-show');
    }
}


function toTheTop() {
    document.documentElement.scrollTop = 0;
}