/*<!-- You can work in the html or in a separate js file. Like:
    <script>
      Here is an image inspector, but the buttons are not implemented yet, that will
      be your task!
       - the nav buttons (up, down, left, right) move the background by 10px
       - the zoom buttons increase/decrease the image by 20%
       - attach only two event listeners to the nav element
         - one for navigation
         - one for zooming
    </script>
    OR
    <script src="bubbling.js"></script> -->*/

    const bubbling = document.querySelector('.bubbling');
    let image = document.querySelector('div');

    //image-inspectorba új sorként a következő: position: relative;
    //plusz le kell tölteni a képet is a githubos mappából

    bubbling.addEventListener('click', (event) => {
      if (event.target.dataset.action === 'move') {
        if (event.target.dataset.direction === 'up') {
          image.style.top = '-10px';
        } else if (event.target.dataset.direction === 'down') {
          //image.style.bottom = '-10px';
          image.style.top = '10px';
        } else if (event.target.dataset.direction === 'right') {
          image.style.right = '-10px';
        } else /*left*/ {
          //image.style.left = '-10px';
          image.style.right = '10px';
        }
      } else if (event.target.dataset.action === 'zoom') {
        if (event.target.dataset.direction === 'in') {
          image.style.zoom = '150%';
        } else /*out*/ {
          image.style.zoom = '50%';
        }
      }
    });