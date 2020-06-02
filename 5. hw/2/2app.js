let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        mouseClick(event);
    });
});

function mouseClick(clickEvent) {
    let numberTarget = clickEvent.target.parentNode;
    let block = {
        prod: numberTarget,
        img: numberTarget.querySelector('img'),
        productName: numberTarget.querySelector('.productName'),
        button: numberTarget.querySelector('button'),
    };
    
    let textButton = block.button.innerText;
    if (textButton === 'Подробнее') {
        showText(block);
    } else if (textButton === 'Отмена') {
        hideText(block);
    }
}

function showText(block) {
    block.img.style.display = 'none';
    let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quidem officiis dolorum magni, exercitationem expedita perferendis illo deserunt eligendi laborum sapiente debitis aliquid assumenda vel.'
    block.productName.insertAdjacentHTML('afterend', `<div class ="newBlock"> ${text} </div>`);
    block.button.innerText = 'Отмена';
}

function hideText(block) {
    block.img.style.display = 'block';
    block.prod.querySelector('.newBlock').remove();
    block.button.innerText = 'Подробнее';
}