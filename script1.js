// JavaScript code

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



document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form, signup details container, and role dropdown
    const signupForm = document.getElementById('signup-form');
    const signupDetails = document.getElementById('signup-details');
    const roleDropdown = document.getElementById('role');

    // Add event listener to the signup form submission
    signupForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const role = roleDropdown.value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const phone = document.getElementById('phone').value;

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Validate username
        if (!isValidEmail(username)) {
            alert('Please enter a valid email address for the username.');
            return;
        }

        // Validate password
        if (!isAlphaNumeric(password)) {
            alert('Password must be alphanumeric.');
            return;
        }

        // Validate phone number
        if (!isValidPhoneNumber(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Perform signup based on selected role and provided details
        if (role === 'tourist') {
            // Sign up logic for tourist
            console.log('Signing up as a tourist with username:', username, 'and phone number:', phone);
            // Send data to server for database storage
            sendDataToServer('/signup/tourist', { username, password, confirmPassword, phone });
        } else if (role === 'provider') {
            // Sign up logic for content provider
            console.log('Signing up as a content provider with username:', username, 'and phone number:', phone);
            // Send data to server for database storage
            sendDataToServer('/signup/provider', { username, password, confirmPassword, phone });
        }

        // Reset form after submission
        signupForm.reset();
    });

    function sendDataToServer(route, data) {
        fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response JSON
        })
        .then(data => {
            console.log('Response from server:', data);
            console.log('Data sent to server successfully.');
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });
    }
    
    

    
 // Add event listener to the role dropdown
 roleDropdown.addEventListener('change', function() {
    // Show/hide login details based on selected role
    if (this.value === 'provider') {
        signupDetails.style.display = 'block'; // Show login details for content provider
    } else if (this.value === 'tourist') {
        signupDetails.style.display = 'block'; // Show login details for tourist
    }
});

    // Initially hide the signup details
    //signupDetails.style.display = 'none';
});

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number
function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Function to validate alphanumeric password
function isAlphaNumeric(password) {
    const alphaNumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    return alphaNumericRegex.test(password);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the login button
    const loginButton = document.getElementById('loginButton');

    // Add event listener to the login button
    loginButton.addEventListener('click', function() {
        // Redirect to the login page
        window.location.href = 'index.html'; // Replace 'login.html' with the actual URL of your login page
    });
});



