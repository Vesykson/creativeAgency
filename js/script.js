const toggle = document.querySelector(
  '.toggle'
); /* document.querySelector() allows to select from DOM-document object model, all html tags and stuff */
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  /* arrow function '() =>' shorthand for 'function()'; when clicked, something will happen */
  toggle.classList.toggle(
    'active'
  ); /* fist toggle is object (red button), second toggle is method/function on classList object */
  navigation.classList.toggle(
    'active'
  ); /* the same - adding active class on navigation */
});
