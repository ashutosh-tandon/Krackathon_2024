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
        <h2>Login/Sign up</h2>
        <!-- Add your form elements here -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">

        <label for="password">Password:</label>
        <input type="password" id="password" name="password">

        <button onclick="submitForm()">SUBMIT</button>
        <a  class="forgot" href="https://spankbang.party/most_popular/2/" target="_blank" >Forgot Password ?</a>
    `;

    popupContainer.appendChild(popupForm);
    document.body.appendChild(popupContainer);

    // Prevent scrolling in the background
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    // Close the pop-up form
    var popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.remove();
        document.body.style.overflow = 'auto'; // Enable scrolling again
    }
}

function submitForm() {
    // Add your form submission logic here
    // This function is called when the "Submit" button in the pop-up form is clicked
    // You may want to handle form validation, AJAX requests, etc.
    closePopup(); // Close the pop-up after submission for this example
}