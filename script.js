document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-slideshow img');
    let currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});

// Get the login form and login details container
const loginForm = document.getElementById('login-form');
const loginDetails = document.getElementById('login-details');

// Hide the login details container initially
loginDetails.style.display = 'none';

const roleDropdown = document.getElementById('role');

roleDropdown.addEventListener('change', function() {
    // Show/hide login details based on selected role
    if (this.value === 'provider') {
        loginDetails.style.display = 'block'; // Show login details for content provider
    } else if (this.value === 'tourist') {
        loginDetails.style.display = 'block'; // Show login details for tourist
    }
});

// Initially hide the login details
loginDetails.style.display = 'none';

// Show the login details if "tourist" is initially selected
if (roleDropdown.value === 'tourist') {
    loginDetails.style.display = 'block';
}


// Add event listener to the login form submission
document.addEventListener('DOMContentLoaded', function() {
    // Get the login form
    const loginForm = document.getElementById('login-form');

    // Add event listener to the login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate username format
        if (!isValidUsername(username)) {
            alert('Please enter a valid username.');
            return;
        }

        // Validate password format
        if (!isValidPassword(password)) {
            alert('Please enter a valid password.');
            return;
        }

        // If both username and password are valid, proceed with login
        login(username, password);
    });
});

function isValidUsername(username) {
    // Regular expression for validating username (for example, you can check for email format)
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return usernameRegex.test(username);
}

function isValidPassword(password) {
    // Regular expression for validating password format (for example, alphanumeric with minimum length)
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    return passwordRegex.test(password);
}



function login(username, password) {
    // Perform login logic here
    
    console.log('Logging in with ',roleDropdown.value, 'username:', username, 'and password:', password);

    // Show popup for successful login
    openPopup();
}

function openPopup() {
    // Show your popup here (e.g., modal, alert, etc.)
    alert('Login successful!'); // Example: Showing an alert
}


//onst roleDropdown = document.getElementById('role');

// Add event listener to the role dropdown
roleDropdown.addEventListener('change', function() {
    // Show/hide login details based on selected role
    if (this.value === 'provider') {
        loginDetails.style.display = 'block'; // Show login details for content provider
        // Reset login details
        document.getElementById('username').value = ''; // Clear username
        document.getElementById('password').value = ''; // Clear password
    } else if (this.value === 'tourist') {
        loginDetails.style.display = 'block'; // Show login details for tourist
        // Reset login details
        document.getElementById('username').value = ''; // Clear username
        document.getElementById('password').value = ''; // Clear password
    } else {
        loginDetails.style.display = 'none'; // Hide login details
    }

    
});

// Initially hide the login details
loginDetails.style.display = 'none';

// Show the login details if "tourist" is initially selected
if (roleDropdown.value === 'tourist') {
    loginDetails.style.display = 'block';
}

