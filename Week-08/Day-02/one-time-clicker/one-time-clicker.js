/*<!-- You can work in the html or in a separate js file. Like:
    <script>
      Create an event listener which logs the current timestamp to the console once the button is clicked.
      When the button is clicked for the second or any other times no event listener should be called.
      Try to solve this two different ways.
      hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    </script>
    OR
    <script src="one-time-clicker.js"></script> -->*/

    const button = document.querySelector('button');
    let clicked = false;

    button.addEventListener('click', (event) => {
      //let timestamp = Math.floor(Date.now());   //kurvahosszú számsort ír, a new Date() pedig tényleg dátumformátumot eredményez
      let timestamp = new Date();
      if (!clicked) {
        console.log(timestamp);
        clicked = true;        
      }
    });
