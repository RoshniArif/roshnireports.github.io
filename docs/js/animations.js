// Function to animate the sections
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    elements.forEach((element) => {
      // Use IntersectionObserver to detect when the section is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [100, 0], // Slide up
              opacity: [0, 1], // Fade in
              duration: 1000,
              easing: 'easeOutQuad',
            });
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      });
  
      observer.observe(element);
    });
  };
  
  // Call the function when the document is ready
  document.addEventListener('DOMContentLoaded', animateOnScroll);
  