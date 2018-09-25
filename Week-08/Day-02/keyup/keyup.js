/*<!-- You can work in the html or in a separate js file. Like:
    <script>
      1) Subscibe to keyup events on the global window object
      2) Console log the event object and peek inside
      3) Display the last pressed key's code as "Last pressed key code is: __"
    </script>
    OR
    <script src="keyup.js"></script> -->*/

    const key = document.querySelector('.key');
    const h1 = document.querySelector('h1');

    document.addEventListener('keyup', (event) => {
      //key.innerHTML = `Keycode: ${event.keyCode}`;
      h1.innerHTML = `Keycode: ${event.keyCode}`;
    });
