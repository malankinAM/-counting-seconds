var bg_img = document.querySelector('[class^=bg_img]');
if (bg_img) {
  bg_img.addEventListener('load', countdown);
}


// Purposefully old style ES5 for maximum support
function countdown() {

  var countFrom = 15;

  var bg_img = document.querySelector('[class^=bg_img]');
  var countdown_time = document.querySelector('[class^=countdown_time]');
  var countdown_description = document.querySelector('.countdown_description');

  var pyro = document.querySelector('.pyro-off');

  if (!bg_img || !countdown_description || !countdown_time || !pyro) return false;

  // Not required on real page
  document.body.style.opacity = 1;
  // -->

  bg_img.style.opacity = 1;

  requestAnimationFrame(function(){
    // Start countdown animation
    countdown_time.className = 'countdown_time';
    countdown_time.textContent = countFrom;

    // Start fireworks animation
    setTimeout(function(){
      requestAnimationFrame(function(){
        pyro.className = 'pyro';
      });
    }, 500);
    
  });
  
  var position  = setInterval(function() {
  


  }, 1000);

  var timer = setInterval(function() {

    requestAnimationFrame(function(){
      countdown_time.textContent = --countFrom;
    });
    
    countFrom = countFrom < 0 ? 0 : countFrom;

    switch (countFrom) {

      case 5 : 
        countdown_description.setAttribute('aria-live', 'assertive');
        countdown_description.setAttribute('role', 'alert');
        break;

      case 4 : 
        countdown_description.removeAttribute('aria-live');
        countdown_description.setAttribute('role', 'timer');
        break;

      case 2 : 
        bg_img.style.opacity = .5;
        break;

      case 1:
        document.body.style.opacity = 0;
        break;
        
      case 0:
        // Use this on the real page
        // window.history.back();

        // Not required on the real page
        // Reset animimations and timer
        clearInterval(timer);
        if (pyro) pyro.className = 'pyro-off';
        countdown_time.className = 'countdown_time-off';
        setTimeout(countdown, 1000);
        // -->
    }

  }, 1000);

}

// countdown(); // fired from bg_img onload();