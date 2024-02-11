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





function faq() {
  var popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  var popupForm = document.createElement('div');
  popupForm.className = 'popup-form';

  // You can customize the form content here
  popupForm.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <h2>Frequently Asked Questions (FAQS)</h2>
    <h4>&#x2022; What is the purpose of this website?</h4>
    <p>The website is designed to streamline the doctor appointment process, 
    offering a centralized platform for users to schedule appointments,
    check doctor availability, and receive timely reminders.
    Additionally, it facilitates efficient communication between patients
    and healthcare providers to address challenges in securing doctor appointments</p>
    
    
    <h4>&#x2022; How does the platform enhance the healthcare experience?</h4>
    <p> By providing a user-friendly interface, the platform aims to improve the overall healthcare experience. Users can easily register as blood donors, find nearby blood donation drives, and connect with those in need. The website fosters community engagement and responsibility, creating a seamless process for both blood donors and recipients.</p>

     
    <h4>&#x2022; What features are available for scheduling doctor appointments?</h4>
     <p>The platform allows users to schedule appointments with ease. It provides information about doctor availability, enables appointment scheduling, and sends timely reminders to ensure a smooth process for users seeking medical consultations.</p>
 
  
     <h4>&#x2022; How does the platform foster community engagement?</h4>
     <p>The website promotes a sense of community engagement and responsibility by providing a unified online platform for blood donors and recipients. It facilitates efficient communication and ensures a seamless process for those involved in blood donation activities</p>
     

     <h4>&#x2022; How does the website contribute to the overall healthcare ecosystem?</h4>
     <p>The website contributes to the healthcare ecosystem by offering a comprehensive system that addresses challenges in securing doctor appointments and promotes a culture of blood donation. It aims to enhance overall community health and well-being through accessible and user-friendly online services.</p>
 
   
     `;


  popupContainer.appendChild(popupForm);
  document.body.appendChild(popupContainer);


  // Prevent scrolling in the background
  document.body.style.overflow = 'auto';


  closePopup
}

function closePopup() {
  // Close the pop-up form
  var popupContainers = document.querySelectorAll('.popup-container');
  popupContainers.forEach(function (container) {
    container.remove();
  });

  // Enable scrolling again
  document.body.style.overflow = 'auto';
}

// The closePopup function remains the same









