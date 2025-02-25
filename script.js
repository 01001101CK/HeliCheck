document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      body.style.overflow = '';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Sample data for testimonials
  const testimonials = [
    {
      image: 'helicopter-case1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      author: 'Tyler Wilson, CEO'
    },
    {
      image: 'helicopter-case1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      author: 'William Smith, Operations Director'
    },
    {
      image: 'helicopter-case1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      author: 'Michelle Johnson, Operations Director'
    }
  ];

  let currentSlide = 0;
  const container = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');

  function updateSlide(direction) {
    // Update current slide index
    if (direction === 'next') {
      currentSlide = (currentSlide + 1) % testimonials.length;
    } else {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    }

    // Create new slide
    const testimonial = testimonials[currentSlide];
    const newSlide = `
      <article class="testimonial-card">
        <img src="${testimonial.image}" alt="Helicopter survey case study" class="case-study-image">
        <div class="testimonial-content">
          <p class="testimonial-text">${testimonial.text}</p>
          <footer class="testimonial-author">
            <cite>${testimonial.author}</cite>
          </footer>
        </div>
      </article>
    `;

    // Add fade-out class
    const currentCard = container.querySelector('.testimonial-card');
    currentCard.style.opacity = '0';

    // Wait for fade out, then update content and fade in
    setTimeout(() => {
      container.innerHTML = newSlide;
      const newCard = container.querySelector('.testimonial-card');
      newCard.style.opacity = '1';
    }, 300);
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener('click', () => updateSlide('prev'));
  nextButton.addEventListener('click', () => updateSlide('next'));
}); 