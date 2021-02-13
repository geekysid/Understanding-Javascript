'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ______SELECTING ELEMENT_______ //

// >> querySelector()
// returns the 1st matching element
const header = document.querySelector('.header');
console.log(header);
const selection = document.querySelector('.section');
console.log(selection);

// >> querySelectorAll()
// returns the all matching elements is the form of Node List.
let sections = document.querySelectorAll('.section');
console.log(sections);
// looping through nodelist - convert into array and the use forEach()
[...sections].forEach(el => console.log(el));

// >> getElementById()
// returns the 1st matching element with given ID
const logo = document.getElementById('logo');
console.log(logo);

// >> getElementsByTagName()
// returns the all matching elements with given tag name in the form of HTML COLLECTION. HTML Collection are live collections and are modified dynamically if any node is added or removed from DOM
const images = document.getElementsByTagName('img');
console.log(images);

// >> getElementsByTagName()
// returns the all matching elements with given class name in the form of HTML COLLECTION. HTML Collection are live collections and are modified dynamically if any node is added or removed from DOM
sections = document.getElementsByClassName('section');
console.log(sections);

// _______ CREATING AND INSERTING ELEMENT _______ //

// >> document.createElement()
// this creates an element in the DOM. This is not attached to the DOM but just a free element.
const cookiesMessage = document.createElement('div');

// add classes to the element
cookiesMessage.classList.add('cookie-message');

// adding text to the element
cookiesMessage.textContent = 'HELLO';

// >> innerHTML
// This is a property which contains a html string. This property updates the node (to which the property is attached) to the new HTML as in the string. For this, node has to exist in the DOM.
cookiesMessage.innerHTML = `We use coockies to improve functionality and analytics of website. <button class='btn cookie-close'> Close </button>`;
console.log(cookiesMessage);

// >> insertAdjacentHTML()
// This function allows to add a new element (HTML string assed as the 2nd  argument of the function) in the DOM at a given place (passed as the 1st argument of the function and has possible value of 'beforbegin', 'afterbegin', 'beforend', 'afterend') retaive to the element on which the  function is called.
header.insertAdjacentElement('afterend', cookiesMessage);

// >> prepend()
// this function adds element as the 1st child of the node it is called on
header.prepend(cookiesMessage);

// >> append()
// this function adds element as the last child of the node it is called on
header.append(cookiesMessage);

// >> after()
// this function adds element after the node it is called on
header.after(cookiesMessage);

// >> before()
// this function adds element before the node it is called on
header.before(cookiesMessage);

// Note: Above you might have seen that we have attached same element 3 times to DOM using 5 different functions but it is only attached once. This is becaue an element can only be attached once to the DOM. To add multiple copy of same element in DOM we first clone the element and then attach the clonned element using any of above three function
// >> clonedNode(true)
// header.append(cookiesMessage.cloneNode(true));

// _______ DELETING ELEMENT _______ //

// >> remove()
// This function is used to remove the node it is called on
document.querySelector('.cookie-close').addEventListener('click', function () {
  cookiesMessage.remove();
});

// _______ STYLE _______ //

// >> setting styles to element
// In order to add styles to the element in DOM, We use the style property followed by the name of the style that we want to apply on it. If name of style is of mutiple words, then we use camalCase.
cookiesMessage.style.backgroundColor = '#37383d';

// >> getting styles of element => getComputedStyle()
// In order to get the value of a property of a element's style, we use a function called getComputedStyle and passing node whose properties are needed
// console.log(getComputedStyle(cookiesMessage)); // this will give all the properties applied on cookiesMessage element

let cookiesMessageHeight = getComputedStyle(cookiesMessage).height;
console.log(cookiesMessageHeight);

// setting new Hight of coockie message box
cookiesMessage.style.height =
  Number.parseFloat(cookiesMessageHeight, 10) + 30 + 'px';

// checking change is height now
cookiesMessageHeight = getComputedStyle(cookiesMessage).height;
console.log(cookiesMessageHeight);

// >> setting properties (variables value) => setProperty()
// We can set the properties of the a node using setProperty() function
cookiesMessage.style.setProperty('background-color', '#151515');

// To change the colour of given element that have used property '--color-primary' to set its color
cookiesMessage.style.setProperty('--color-primary', '#ffcb03');

// To change the colour of all elements that have used property '--color-primary' to set its color
document.documentElement.style.setProperty('--color-primary', '#ff585f');

// _______ ATTRIBUTES _______ //

// >> reading attribute to element
// we can simply read the standard attributes of any element using the dot operator
const logoSrc = logo.src; // this always gives the absolute url
const logoAlt = logo.alt;
const logoClass = logo.className;
const logoId = logo.id;

console.log(`Logo SRC => ${logoSrc}`);
console.log(`Logo ALT => ${logoAlt}`);
console.log(`Logo CLASS => ${logoClass}`);
console.log(`Logo ID => ${logoId}`);

// >> setAttribute() => setting attribute to element
// In order to set the attribute which exists or does not exists on an element we use setAttribute() function
logo.setAttribute('company', 'Bankiest');
logo.setAttribute('alt', 'Company Logo');
logo.setAttribute('data-version-number', '5.0.1');

// >> getAttribute() => getting attribute to element
// we can also use getAttribute() function to get the attributes (Standart or non-standard attributes) of the element
const logoSrc2 = logo.getAttribute('src'); // this always gives the relative url
const logoAlt2 = logo.getAttribute('alt');
const logoClass2 = logo.getAttribute('className');
const logoId2 = logo.getAttribute('id');
const logoCompany = logo.getAttribute('company');
const dataVersion = logo.getAttribute('data-version-number');

console.log(`Logo SRC => ${logoSrc2}`);
console.log(`Logo ALT => ${logoAlt2}`);
console.log(`Logo CLASS => ${logoClass2}`);
console.log(`Logo ID => ${logoId2}`);
console.log(`Logo Company => ${logoCompany}`);
console.log(`Data Version => ${dataVersion}`);

// >> Data Attribute
// Manytimes we have some special 'data' attributes attached to the element. We have set such attribute to logo element above. These attributes starts with 'data-' and can be accessed by dot modifier using the 'dataset' property.
console.log(logo.dataset.versionNumber);

// >> hasAttribute() => checking if attribute is attached to the element.
console.log(`Logo has disabled property: ${logo.hasAttribute('disabled')}`);
console.log(`Logo has alt property: ${logo.hasAttribute('alt')}`);
console.log(`Logo has href property: ${logo.hasAttribute('href')}`);
console.log(`Logo has class property: ${logo.hasAttribute('class')}`);

// _______ CLASSES _______ //

// >> add() => Adding Classes (can accept multiple classes as parameter)
logo.classList.add('class1', 'class2');
console.log(`Classes => ${logo.classList}`);

// >> remove() => Removing Classes (can accept multiple classes as parameter)
logo.classList.remove('class1', 'class2');
console.log(`Classes => ${logo.classList}`);

// >> toggle() => Toggling Classes (can accept only 1 class as parameter)
logo.classList.toggle('class1');
console.log(`Classes => ${logo.classList}`);
logo.classList.toggle('class1');
console.log(`Classes => ${logo.classList}`);

// >> contains() => Check if class exists (can accept only 1 class as parameter)
const classExists = logo.classList.contains('class1');
console.log(classExists);
const classExists2 = logo.classList.contains('nav__logo');
console.log(classExists2);

// _______ SCROLLING TO SECTION _______ //

// We can use scroll to a give element on a page in couple of ways. Old school ways which is a bit long but gives us understanding of couple of important concept and a ES6 way which is basically just one line of code.

const scroll_btn = document.querySelector('.btn--scroll-to');
const element_to_scroll_to = document.getElementById('section--1');

// getting the cordinates of the elements
scroll_btn.addEventListener('click', function (e) {
  // >> OLD SCHOOL WAY

  // getting coordinates of the element wo which we want to scroll to. This function gives cordinates relative to the VIEW PORT
  const cords = element_to_scroll_to.getBoundingClientRect();
  console.log(cords);
  console.log(`X Cords: ${cords.left}; Y Cords: ${cords.top}`);

  // getting viewport dimension
  const viewport_height = document.documentElement.clientHeight;
  const viewport_width = document.documentElement.clientWidth;
  console.log(`Viewport Height: ${viewport_height}`);
  console.log(`Viewport Width: ${viewport_width}`);

  // getting current scroll position
  const scroll_x = window.pageXOffset;
  const scroll_y = window.pageYOffset;
  console.log(`Scroll in X direction: ${scroll_x}`);
  console.log(`Scroll in Y direction: ${scroll_y}`);

  // // scroll to the element -> This function will move the element or cordinate (passed as the argument) to the top of the viewport, i.e. they will be the new 0,0 cordinate of the viewport. We are getting cordinates to the elements to scroll using function getBoundingClinetRect() which gives data relative to view port and so if we have scrolled, the cordinates of element withh change and hence we will not to the element.
  // window.scrollTo(cords.left, cords.top);

  // // To over come this, we will add the number of pixel scrolled in x and y cordinates to the coordinates of the element we got from getBoundingClientRect().
  // window.scrollTo(cords.left + scroll_x, cords.top + scroll_y);

  // // In order to add scooth scrolllin, we pass an object to the function which has 3 properties, left, top, and behavior
  // window.scrollTo({
  //   left: cords.left + scroll_x,
  //   top: cords.top + scroll_y,
  //   behavior: 'smooth',
  // });

  // >> NEW ES6 WAY
  // we can use the function scrollIntoView() which accepts an object having a property of behavior
  element_to_scroll_to.scrollIntoView({ behavior: 'smooth' });
});

// _______ REMOVING EVENT LISTENERS _______ //
// https://developer.mozilla.org/en-US/docs/Web/Events

// >> removing event listener
const nav = document.querySelector('.nav');

const test_func = () => console.log(`Nav Mouse Enter`);
const test_func2 = () => console.log(`Nav Mouse Left`);

nav.addEventListener('mouseenter', test_func);
nav.addEventListener('mouseleave', test_func2);

// removing mounseenter event listener after 5 sec
setTimeout(() => {
  nav.removeEventListener('mouseenter', test_func);
  console.log(`mouseenter Event no more attached to element`);
}, 5000);

// _______ EVENT PROPAGATION _______ //
// So here wehn we click on an element, the an event dosen't simple occure at that element, It travels from the document level to it... i.e., it traverse through all the parent elements of that element before reaching it. This is called EVENT CAPTURING. At this moment the event occues at the element. After that the click event again traberse through all the element to reach the document element and ultimately event cease of exists. This is called BUBLING PHASE. In this phase if any of the parent element of the element has same event listener, then event will happen at that parent element as well. This is how event propogates through the DOM.

// >> e.target => always represents the element on which event have initually happened.
// >> this => always represents the element to which the event is tied to in bubling phase.
// >> e.currentTarget => always represents the element to which the event is tied to in bubling phase. This is same as 'this' here

const link_element = document.querySelector('.nav__link');

// random color generator
const randomInt = (min, max) => Math.floor(Math.random() * max - min + 1) + min;
const randomColorGenerator = () => `rgb(
  ${randomInt(0, 255)},
  ${randomInt(0, 255)},
  ${randomInt(0, 255)}
)`;

// adding event listener to link
link_element.addEventListener('click', function (e) {
  console.log();
  console.log('Default Bubling Phase'),
    console.log(`link_element => this keyword is => `, this);
  console.log(`link_element => e.target is => `, e.target);
  console.log(`link_element => e.currentTarget is => `, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColorGenerator();
});

// adding event listener to navbar
nav.addEventListener('click', function (e) {
  console.log();
  console.log(`nav => this keyword is => `, this);
  console.log(`nav => e.target is => `, e.target);
  console.log(`nav => e.currentTarget is => `, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColorGenerator();
});

// >> Events in CAPTURING pahse
// for this we need to provide a 3rd parameter to the event listener as true which makes the ecent to occure in capturing phase. By default the value of this is false
// adding event listener to navbar
nav.addEventListener(
  'click',
  function (e) {
    console.log();
    console.log('Capturing Phase');
    console.log(`nav => this keyword is => `, this);
    console.log(`nav => e.target is => `, e.target);
    console.log(`nav => e.currentTarget is => `, e.currentTarget);
    console.log(e.currentTarget === this);
    this.style.backgroundColor = randomColorGenerator();
  },
  true
);

// _______ EVENT DELEGATION _______ //
