 function scrollFunction() {
    var btn = document.getElementById("goToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }



window.onscroll = function() {
    scrollFunction();
  };



  function goToLogin() {
    // Create a pop-up form
    var popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    var popupForm = document.createElement('div');
    popupForm.className = 'popup-form';

    // You can customize the form content here
    popupForm.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>Login/Signup</h2>
        <!-- Add your form elements here -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">

        <label for="password">Password:</label>
        <input type="password" id="password" name="password">

        <button onclick="submitForm()">SUBMIT</button>
        <button class="forgot" onclick="forgotpass()" >Forgot Password ?</a>

        <button class="new" onclick="newUserRegistration()">New User ?</button>
        
    `;

    popupContainer.appendChild(popupForm);
    document.body.appendChild(popupContainer);

    // Prevent scrolling in the background
    document.body.style.overflow = 'auto';
}

function closePopup() {
    // Close the pop-up form
    var popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.remove();
        document.body.style.overflow = 'auto'; // Enable scrolling again
    }
}



function newUserRegistration() {
    // Create a pop-up form
    var popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    var popupForm = document.createElement('div');
    popupForm.className = 'popup-form';

    // You can customize the form content here
    popupForm.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>New User Registration</h2>
        <!-- Add your registration form elements here -->

        <label for="name">Name:</label>
        <input type="text" id="name" name="name"> 
        
        <label for="contactno">Contact Number:</label>
        <input type="text" id="contactno" name="contactno">


        <label for="newUsername">Username:</label>
        <input type="text" id="newUsername" name="newUsername">

        <label for="newPassword">Password:</label>
        <input type="password" id="newPassword" name="newPassword">

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword">

        <button onclick="submitRegistration()">Register</button>
    `;

    popupContainer.appendChild(popupForm);
    document.body.appendChild(popupContainer);

    // Prevent scrolling in the background
    document.body.style.overflow = 'hidden';
}

function submitRegistration() {
    // Add your registration form submission logic here
    // This function is called when the "Register" button in the pop-up form is clicked
    // You may want to handle form validation, AJAX requests, etc.
    closePopup(); // Close the pop-up after registration for this example
}



function forgotpass() {
    // Create a pop-up form
    var popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    var popupForm = document.createElement('div');
    popupForm.className = 'popup-form';

    // You can customize the form content here
    popupForm.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>Reset Password</h2>
        <!-- Add your registration form elements here -->

    
        <label for="newUsername">Username:</label>
        <input type="text" id="newUsername" name="newUsername">


        <button onclick="donereset()">Send OTP</button>
    `;

    popupContainer.appendChild(popupForm);
    document.body.appendChild(popupContainer);

    // Prevent scrolling in the background
    document.body.style.overflow = 'hidden';
}

function donereset ()
{
    closePopup();
}

function bmi() {
  var popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  var popupForm = document.createElement('div');
  popupForm.className = 'popup-form';

  // You can customize the form content here
  popupForm.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <h2>BMI Calculator</h2>
    
    <label for="height">Height (in cm):</label>
    <input type="text" id="height" name="height"> 

    <label for="weight">Weight (in kg):</label>
    <input type="text" id="weight" name="weight">

    <button onclick="calculateBmi()">Calculate</button>
  `;

  popupContainer.appendChild(popupForm);
  document.body.appendChild(popupContainer);

  // Prevent scrolling in the background
  document.body.style.overflow = 'hidden';
}


function calculateBmi() {
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
    alert('Please enter valid numeric values for height and weight.');
    return;
  }

  var bmiValue = weight / ((height / 100) * (height / 100));
  bmiValue = bmiValue.toFixed(2); // Round to two decimal places

  closePopup();

  var resultContainer = document.createElement('div');
  resultContainer.className = 'popup-container';

  var resultForm = document.createElement('div');
  resultForm.className = 'popup-form';

  // Display BMI result
  resultForm.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <h2>Your BMI: ${bmiValue}</h2>
  `;

  resultContainer.appendChild(resultForm);
  document.body.appendChild(resultContainer);

  // Prevent scrolling in the background
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  // Close the pop-up form
  var popupContainers = document.querySelectorAll('.popup-container');
  popupContainers.forEach(function(container) {
    container.remove();
  });

  // Enable scrolling again
  document.body.style.overflow = 'auto';
}


