const $button = document.querySelectorAll('.box');
$button.forEach(button => {
    button.querySelector('.minus').
        addEventListener('click', (e) => {
            e.target
                .closest('.box')
                .querySelector('span')
                .textContent--;
        });

    button.querySelector('.plus')
        .addEventListener('click', (e) => {
            e.target
                .closest('.box')
                .querySelector('span')
                .textContent++;
        });
});