/*<!-- You can work in the html or in a separate js file. Like:
    <script>
      On the click of the button,
      Count the items in the list
      And display the result in the result element.
    </script>
    OR
    <script src="events-2.js"></script> -->*/

    const button = document.querySelector('button');   //simán magát a cuccot, hashtaggel az id-t, .-tal pedig a class-t hívom
    const li = document.querySelectorAll('li');
    const p = document.querySelector('p');
    
    button.addEventListener('click', (event) => {
      event = li.length;
      //console.log(event);
      p.innerHTML = `${event}`;
    });
