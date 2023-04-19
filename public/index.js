var typed = new Typed(".auto-input", {
  strings: [" Aryan Srivastava", "a Full Stack Developer", "a Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})


// New code for updating the active nav link
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.30,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});


// -------For PopUp-----
document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.project');
  const popupWrapper = document.querySelector('.popup-wrapper');
  const popupContent = document.querySelector('.popup-content');
  const closeBtn = document.querySelector('.close-btn');

  projects.forEach((project) => {
    project.addEventListener('click', function () {
      popupWrapper.style.display = 'block';
      popupContent.src = `project-popups/project-popup-${project.dataset.projectId}.html`;
    });
  });

  closeBtn.addEventListener('click', function () {
    popupWrapper.style.display = 'none';
  });
});


// ------------For Loader---------

$('#contact-form').on('submit', async function (event) {
  event.preventDefault();

  // Show loading indicator and disable the button
  const submitButton = $('.download-cv-one');
  const buttonText = submitButton.find('span');
  buttonText.text('Sending...');
  submitButton.append('<div class="loader"></div>');
  submitButton.prop('disabled', true);

  // Collect form data
  const data = {
    user_name: $('input[name="user_name"]').val(),
    user_email: $('input[name="user_email"]').val(),
    message: $('textarea[name="message"]').val(),
  };

  try {
    // Send form data to the server
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Show success popup
      alert('Message sent successfully.');
    } else {
      // Show error popup
      alert('Failed to send message.');
    }
  } catch (error) {
    // Show error popup
    alert('Failed to send message.');
  } finally {
    // Reset button text, hide the loader, and enable the button
    buttonText.text('Send Message');
    submitButton.find('.loader').remove();
    submitButton.prop('disabled', false);
  }
});




document.addEventListener("DOMContentLoaded", function() {
  // Get the elements by their ID
  const mobile = document.getElementById("mobile");
  const mobileClose = document.getElementById("mobile-close");
  const mobileDrop = document.getElementById("mobile-drop");
  const navLinkAs = document.querySelectorAll(".nav-link-mobile a");

  // Function to show the navbar and switch icons
  function showNavbar() {
      mobileDrop.style.opacity = "1";
      mobileDrop.style.display = "block";
      mobile.style.display = "none";
      mobileClose.style.display = "flex";
  }

  // Function to hide the navbar and switch icons
  function hideNavbar() {
      mobileDrop.style.opacity = "0";
      mobileDrop.style.display = "none";
      mobile.style.display = "flex";
      mobileClose.style.display = "none";
  }

  // Add event listeners for click events
  mobile.addEventListener("click", showNavbar);
  mobileClose.addEventListener("click", hideNavbar);

  // Add event listeners to nav links
  navLinkAs.forEach(function(navLinkA) {
      navLinkA.addEventListener("click", hideNavbar);
  });
});

