'use strict';
const $button = document.querySelectorAll('.box');
$button.forEach(button => {
    button.querySelector('.minus').
        addEventListener('click', (element) => {
            element.target
                .closest('.box')
                .querySelector('span')
                .textContent--;
        });

    button.querySelector('.plus')
        .addEventListener('click', (element) => {
            element.target
                .closest('.box')
                .querySelector('span')
                .textContent++;
        });
});
