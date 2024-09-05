// Existing code
// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");

// signupBtn.onclick = () => {
//     loginForm.style.marginLeft = "-50%";
//     loginText.style.marginLeft = "-50%";
// };
// loginBtn.onclick = () => {
//     loginForm.style.marginLeft = "0%";
//     loginText.style.marginLeft = "0%";
// };
// signupLink.onclick = () => {
//     signupBtn.click();
//     return false;
// };

// // New code to handle the "Login" option in the navbar
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('.nav-links a[href="#login"]').addEventListener('click', function(event) {
//         event.preventDefault();
//         showLoginPage();
//     });
// });

// function showLoginPage() {
//     document.querySelector('.main-content').innerHTML = `
//         <div class="wrapper">
//             <div class="title-text">
//                 <div class="title login">Login Form</div>
//                 <div class="title signup">Signup Form</div>
//             </div>
//             <div class="form-container">
//                 <div class="slide-controls">
//                     <input type="radio" name="slide" id="login" checked>
//                     <input type="radio" name="slide" id="signup">
//                     <label for="login" class="slide login">Login</label>
//                     <label for="signup" class="slide signup">Signup</label>
//                     <div class="slider-tab"></div>
//                 </div>
//                 <div class="form-inner">
//                     <form action="#" class="login">
//                         <div class="field">
//                             <input type="text" placeholder="Email Address" required>
//                         </div>
//                         <div class="field">
//                             <input type="password" placeholder="Password" required>
//                         </div>
//                         <div class="pass-link"><a href="#">Forgot password?</a></div>
//                         <div class="field btn">
//                             <div class="btn-layer"></div>
//                             <input type="submit" value="Login">
//                         </div>
//                         <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
//                     </form>
//                     <form action="#" class="signup">
//                         <div class="field">
//                             <input type="text" placeholder="Email Address" required>
//                         </div>
//                         <div class="field">
//                             <input type="password" placeholder="Password" required>
//                         </div>
//                         <div class="field">
//                             <input type="password" placeholder="Confirm password" required>
//                         </div>
//                         <div class="field btn">
//                             <div class="btn-layer"></div>
//                             <input type="submit" value="Signup">
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     `;
//     // Re-attach event listeners for the newly added elements
//     reinitializeFormSwitching();
// }

// function reinitializeFormSwitching() {
//     const loginText = document.querySelector(".title-text .login");
//     const loginForm = document.querySelector("form.login");
//     const loginBtn = document.querySelector("label.login");
//     const signupBtn = document.querySelector("label.signup");
//     const signupLink = document.querySelector("form .signup-link a");

//     signupBtn.onclick = () => {
//         loginForm.style.marginLeft = "-50%";
//         loginText.style.marginLeft = "-50%";
//     };
//     loginBtn.onclick = () => {
//         loginForm.style.marginLeft = "0%";
//         loginText.style.marginLeft = "0%";
//     };
//     signupLink.onclick = () => {
//         signupBtn.click();
//         return false;
//     };
// }
// // Function to load the login page content from an external HTML file
// function loadLoginPage() {
//     fetch('login.html') // Assuming your login page is in a file called 'login.html'
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector('.main-content').innerHTML = data;
//             reinitializeFormSwitching(); // Reinitialize the form switching functionality
//         })
//         .catch(error => console.error('Error loading login page:', error));
// }

// // Event listener for the "Login" option in the navbar
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('.nav-links a[href="#login"]').addEventListener('click', function(event) {
//         event.preventDefault();
//         loadLoginPage();
//     });
// });

// function reinitializeFormSwitching() {
//     // This function should be the same as in the login page JavaScript
//     const loginText = document.querySelector(".title-text .login");
//     const loginForm = document.querySelector("form.login");
//     const loginBtn = document.querySelector("label.login");
//     const signupBtn = document.querySelector("label.signup");
//     const signupLink = document.querySelector("form .signup-link a");

//     signupBtn.onclick = () => {
//         loginForm.style.marginLeft = "-50%";
//         loginText.style.marginLeft = "-50%";
//     };
//     loginBtn.onclick = () => {
//         loginForm.style.marginLeft = "0%";
//         loginText.style.marginLeft = "0%";
//     };
//     signupLink.onclick = () => {
//         signupBtn.click();
//         return false;
//     };
// }

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.nav-links a[href="#contacts"]').addEventListener('click', function(event) {
        event.preventDefault();
        showContactsPage();
    });
});

function showContactsPage() {
    document.querySelector('.main-content').innerHTML = `
        <section class="contacts">
            <h2>My Contacts</h2>
            <div class="contact-form">
                <input type="text" id="contactName" placeholder="Enter Name" required>
                <input type="tel" id="contactNumber" placeholder="Enter Phone Number" required>
                <button onclick="saveContact()">Save Contact</button>
            </div>
            <div class="saved-contacts">
                <h3>Saved Contacts</h3>
                <ul id="contactsList"></ul>
            </div>
        </section>
    `;
    loadContacts();
}

function saveContact() {
    const name = document.getElementById('contactName').value;
    const number = document.getElementById('contactNumber').value;

    if (name && number) {
        const contact = { name, number };
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContacts();
        document.getElementById('contactName').value = '';
        document.getElementById('contactNumber').value = '';
    } else {
        alert('Please enter both name and phone number.');
    }
}

function loadContacts() {
    const contactsList = document.getElementById('contactsList');
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contactsList.innerHTML = contacts.map(contact => `
        <li>${contact.name} - ${contact.number}</li>
    `).join('');
}
