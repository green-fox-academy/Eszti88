const button = document.querySelector('button');
const p = document.querySelector('p');

document - addEventListener('DOMContentLoaded', () => {
  function clock() {
    if (seconds < 5) {
      seconds++;
    } else {
      clearInterval(timer)
    }
  }

  let counter = 0;
  let seconds = 0;
  let timer = setInterval(clock, 1000);
  let message = '5 seconds elapsed and clicked 3 times';

  button.addEventListener('click', clicked);

  function clicked(event) {
    if (seconds < 5) {
      button.removeEventListener('click', clicked);
      return;
    } else {
      counter++;
      if (counter === 3) {
        p.innerHTML = `${message}`;
      }
    }
  }
});
