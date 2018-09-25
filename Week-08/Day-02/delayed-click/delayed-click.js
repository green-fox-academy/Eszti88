const button = document.querySelector('button');
const h1 = document.querySelector('h1');

/* display without delay
button.addEventListener('click', (event) => {
  let message = '2 seconds elapsed';
  h1.innerHTML = `${message}`;
});*/

button.addEventListener('click', delayedClick);

function delayedClick(event) {
  let message = '2 seconds elapsed';
  setTimeout(() => {
    h1.innerHTML = `${message}`;
  }, 2000);
}