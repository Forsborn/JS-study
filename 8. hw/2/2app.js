'use strict';

let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        mouseClick(event);
    });
});

function mouseClick(clickEvent) {
    let numberTarget = clickEvent.target;
    switch (numberTarget.innerHTML) {
        case 'Primary':
            document.body.style.background = '#007bff';
            break;
        case 'Secondary':
            document.body.style.background = '#6c757d';
            break;
        case 'Success':
            document.body.style.background = '#28a745';
            break;
        case 'Danger':
            document.body.style.background = '#dc3545';
            break;
        case 'Warning':
            document.body.style.background = '#ffc107';
            break;
        case 'Info':
            document.body.style.background = '#17a2b8';
            break;
        case 'Light':
            document.body.style.background = '#f8f9fa';
            break;
        case 'Dark':
            document.body.style.background = '#343a40';
            break;
        case 'Link':
            document.body.style.background = '#ffffff';
            break;
        default:
            break;
    }
    //alert('Вы нажали кнопку - ' + numberTarget.innerText);
}
