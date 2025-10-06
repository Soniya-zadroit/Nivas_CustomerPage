document.addEventListener('DOMContentLoaded', () => {

  function initializeBackgroundRotation(selector, interval) {

    const backgrounds = document.querySelectorAll(selector);

    if (backgrounds.length === 0) return; // Ensure there are backgrounds to rotate
 
    let currentBg = 0;
 
    function rotateBackground() {

      // Hide all backgrounds

      backgrounds.forEach(bg => bg.classList.remove('fade-in'));
 
      // Show current background

      backgrounds[currentBg].classList.add('fade-in');
 
      // Update index for next rotation

      currentBg = (currentBg + 1) % backgrounds.length;

    }
 
    // Show first background immediately

    rotateBackground();
 
    // Rotate backgrounds at the specified interval

    setInterval(rotateBackground, interval);

  }
 
  // Initialize for both sets of backgrounds

  initializeBackgroundRotation('.bg-image', 4000);

  initializeBackgroundRotation('.bg-image1', 4000);

});

 
// let lastScrollTop = 0;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         navbar.style.transform = 'translateY(-100%)';
//     } else {
//         // Scrolling up
//         navbar.style.transform = 'translateY(0)';
//     }
    
//     lastScrollTop = scrollTop;
// });

 
 document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let isScrolling = false;
    
    // Add initial classes
    navbar.classList.add('fixed-top', 'navbar-transition');
    
    // Throttle scroll event for better performance
    function onScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                handleScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }
    
    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Handle scroll direction
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling DOWN & past threshold
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling UP
            navbar.classList.remove('navbar-hidden');
        }
        
        // Handle background opacity
        if (currentScroll > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Handle touch events for iOS
    let touchStart = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStart = e.touches[0].pageY;
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        const touchEnd = e.touches[0].pageY;
        const diff = touchStart - touchEnd;
        
        if (Math.abs(diff) > 5) { // Add small threshold to prevent minor touches
            if (diff > 0) {
                // Scrolling UP
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling DOWN
                navbar.classList.remove('navbar-hidden');
            }
        }
        
        touchStart = touchEnd;
    }, { passive: true });
});