'use strict';

// modal element
const modal = document.querySelector('.modal');

// overlay element
const overlay = document.querySelector('.overlay');

// close button element
const closeBtn = document.querySelector('.close-modal');

// console.log(modal.textContent);
// console.log(overlay.textContent);
// console.log(closeBtn.textContent);

// all btn whihc display modalwhne clicked
const showModalBtn = document.querySelectorAll('.show-modal');

// function that sets elements to display modal and overlay
const showModal = function() {
    if (modal.classList.contains('hidden'))
        modal.classList.remove('hidden');

    if (overlay.classList.contains('hidden'))
        overlay.classList.remove('hidden');
}

// function that sets elements to hide modal and overlay
const hideModal = function () {
    if (!modal.classList.contains('hidden'))
        modal.classList.add('hidden');

    if (!overlay.classList.contains('hidden'))
        overlay.classList.add('hidden');
}


// displaying modal and overlay when modal show button is clicked
for (let i=0; i<showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', showModal);
}

// closing modal and overlay when overlay area is clicked
overlay.addEventListener( 'click', hideModal);

// closing modal and overlay when close button is clicked
closeBtn.addEventListener( 'click', hideModal);

// closing modal and overlay when escape key is pressed
document.addEventListener( 'keydown', function(event) {
    if (event.key === 'Escape')
        hideModal();
});
