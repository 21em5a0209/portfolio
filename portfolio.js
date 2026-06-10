// Portfolio interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animate progress bars on page load
  const progressBars = document.querySelectorAll('progress');
  
  progressBars.forEach(bar => {
    const value = bar.getAttribute('value');
    const maxValue = bar.getAttribute('max');
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.transition = 'width 1s ease-in-out';
      bar.style.width = (value / maxValue) * 100 + '%';
    }, 100);
  });

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});

// Function to validate contact form
function validateContactForm(form) {
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');
  
  if (!email.value || !message.value) {
    alert('Please fill in all fields');
    return false;
  }
  
  if (!email.value.includes('@')) {
    alert('Please enter a valid email address');
    return false;
  }
  
  return true;
}

// Portfolio data structure for future enhancements
const portfolioData = {
  projects: [
    {
      title: 'MATLAB Project',
      type: 'Diploma Project',
      technologies: ['MATLAB', 'Simulink', 'Circuit Analysis', 'Signal Processing']
    },
    {
      title: 'Manual Testing',
      type: 'QA Testing Project',
      technologies: ['Test Case Creation', 'Bug Tracking', 'Test Documentation', 'JIRA']
    },
    {
      title: 'Automation Testing',
      type: 'Test Automation Project',
      technologies: ['Selenium WebDriver', 'Test Automation Framework', 'CI/CD Integration', 'Git']
    },
    {
      title: 'Web Application Testing',
      type: 'End-to-End Testing Project',
      technologies: ['Cross-browser Testing', 'Performance Testing', 'Database Testing', 'Test Management']
    }
  ],
  skills: [
    { name: 'Java (Basic)', level: 60 },
    { name: 'HTML', level: 30 },
    { name: 'MATLAB', level: 50 },
    { name: 'Manual Testing', level: 90 },
    { name: 'Automation Testing', level: 65 },
    { name: 'Selenium WebDriver', level: 70 },
    { name: 'Test Documentation', level: 85 }
  ]
};

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
