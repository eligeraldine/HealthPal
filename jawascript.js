
  function fadeInOnScroll() {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      fadeElements.forEach(function (element) {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (position < screenPosition) {
              element.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', fadeInOnScroll);