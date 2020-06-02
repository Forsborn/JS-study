let windoW = document.querySelector('.window');
let close = document.querySelector('i');
let open = document.querySelector('button');

close.addEventListener('click', function () {
    windoW.classList.add('display');
});

open.addEventListener('click', function () {
    windoW.classList.remove('display');
});
