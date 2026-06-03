const form = document.getElementById('portfolio-contact-form');
const popup = document.getElementById('success-popup');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevents the default page reload
  
  submitBtn.disabled = true;
  submitBtn.innerText = 'Sending...';
  
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Show success popup
      popup.style.display = 'block';
      form.reset(); // Clear the form fields
      
      // Hide popup after 4 seconds
      setTimeout(() => {
        popup.style.display = 'none';
      }, 4000);
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  } catch (error) {
    alert('Oops! There was a network error. Please try again.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = 'Send Message';
  }
});