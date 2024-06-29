// Select the form element
const contactForm = document.querySelector('.contact-form form');

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Validate each input field
  const name = contactForm.querySelector('input[name="name"]').value.trim();
  const email = contactForm.querySelector('input[name="email"]').value.trim();
  const message = contactForm.querySelector('textarea[name="message"]').value.trim();
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return false;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  // If all validations pass, you can proceed with form submission or other actions
  alert('Form submitted successfully!');
  contactForm.reset(); // Clear form fields after submission
}

// Function to validate email format using regular expression
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Event listener for form submission
contactForm.addEventListener('submit', validateForm);
// Sample project data (replace with your actual data)
const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, turpis eu cursus suscipit.',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Fusce ut ipsum eget risus rhoncus varius. Sed in ligula sit amet felis dictum ullamcorper.',
      link: '#'
    }
  ];
  
  // Function to display projects
  function displayProjects() {
    const projectGallery = document.querySelector('.project-gallery');
    
    // Clear existing content
    projectGallery.innerHTML = '';
    
    // Loop through projects and create HTML elements
    projects.forEach((project, index) => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      
      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      
      projectGallery.appendChild(projectElement);
    });
  }
  
  // Call the displayProjects function to initially load projects
  displayProjects();
  