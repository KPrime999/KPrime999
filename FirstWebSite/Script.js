// Get all links in the navbar
const links = document.querySelectorAll('.navbar-nav .nav-link');
// Loop through each link
links.forEach(link => {
    // Check if the link's href matches the current page's URL
    if (link.href === window.location.href) {
        // Add the active class to the link
        link.classList.add('active');
    }
});




// Popup

let popup = document.getElementById('popup');

function openPopup(){
    document.getElementById("popup").classList.add("open-popup");
    document.getElementById("overlay").style.display = "block";
}
  
function closePopup(){
    document.getElementById("popup").classList.remove("open-popup");
    document.getElementById("overlay").style.display = "none";
}

// Input section
const inputField = document.querySelector('input[type="number"]');

inputField.addEventListener('keydown', (event) => {
    if (event.key !== 'Backspace' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && isNaN(event.key)) {
      event.preventDefault();
    }
});

document.getElementById('special-event').addEventListener('change', function() {
    if (this.value === 'Custom') {
      document.getElementById('custom-event').style.display = 'block';
      document.getElementById('custom-event').focus();
    } else {
      document.getElementById('custom-event').style.display = 'none';
    }
  });
  
  document.getElementById('custom-event').addEventListener('blur', function() {
    var customText = this.value;
    var selectElement = document.getElementById('special-event');
    var optionElement = document.createElement('option');
    optionElement.value = customText;
    optionElement.text = customText;
    selectElement.add(optionElement);
    selectElement.selectedIndex = selectElement.options.length - 1;
    this.value = '';
    this.style.display = 'none';
  });

  const timeInput = document.getElementById('time-input');
  const timeMeridiem = document.getElementById('time-meridiem');
  const timeError = document.getElementById('time-error');
  
  timeInput.addEventListener('input', () => {
    const timeValue = timeInput.value;
    const meridiemValue = timeMeridiem.value;
  
    if (!/^\d{1,2}:\d{2}$/.test(timeValue)) {
      timeError.style.display = 'block';
    } else {
      timeError.style.display = 'none';
    }
  });


  document.getElementById('email-input').addEventListener('input', function() {
    var emailValue = this.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      document.getElementById('email-error').style.display = 'none';
    } else {
      document.getElementById('email-error').style.display = 'block';
    }
  });
  
  document.getElementById('email-input').addEventListener('blur', function() {
    var emailValue = this.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      // Validate email address on server-side
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.email-validator.net/api/validate?email=' + emailValue, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.is_valid) {
            document.getElementById('email-error').style.display = 'none';
          } else {
            document.getElementById('email-error').style.display = 'block';
            document.getElementById('email-error').innerHTML = 'Invalid email address. Please enter a valid email address.';
          }
        } else {
          document.getElementById('email-error').style.display = 'block';
          document.getElementById('email-error').innerHTML = 'Error validating email address. Please try again.';
        }
      };
      xhr.send();
    } else {
      document.getElementById('email-error').style.display = 'block';
      document.getElementById('email-error').innerHTML = 'Invalid email address. Please enter a valid email address.';
    }
  });

