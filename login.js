import { auth, db } from './firebase';  // Importing initialized auth and db
import { signInWithEmailAndPassword } from 'firebase/auth';
import { startLoader, endLoader } from './register.js';  // Assuming loader functions are in register.js

// Get DOM elements for the login form
let signInPassword = document.getElementById('signInPassword');
let signInEmail = document.getElementById('signInEmail');
let signInBtn = document.getElementById('signInBtn');



// Function to handle user login
const loginUser = async () => {
  // Get email and password values from user input fields
  const email = signInEmail.value.trim();
  const password = signInPassword.value.trim();

  if (email && password) {
    startLoader();  // Start the loader when user attempts to log in

    try {
      // Attempt to sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data in localStorage
      localStorage.setItem("userData", JSON.stringify({
        username: user.displayName || "User",
        email: user.email,
        uid: user.uid,
      }));

      // Show success message
      Swal.fire({
        text: 'Logged In Successfully!',
        icon: 'success',
      });

    //   // Redirect to home page after successful login
    //   setTimeout(() => {
    //     window.location.href = 'home.html';
    //   }, 1500);  // Add a small delay before redirect

    } catch (error) {
      // Handle login errors
      console.error("Error signing in:", error);

      // Stop loader
      endLoader();

      // Display error message using Swal
      switch (error.code) {
        case 'auth/wrong-password':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Password',
          });
          break;
        case 'auth/invalid-credential':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No user found with this email address.',
          });
          break;
        default:
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong, please try again.',
          });
      }
    }
  } else {
    // If either email or password is missing, show an error
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill out all the required fields.',
    });
  }
};

// Event listener for the login button
// signInBtn && signInBtn.addEventListener('click', loginUser);

// login.js (or inline script in login.html)

// Assuming you have the authentication process set up
const logUser = async () => {
    const email = signInEmail.value.trim();
    const password = signInPassword.value.trim();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save user data in localStorage
      localStorage.setItem("userData", JSON.stringify({
        username: user.displayName || "User",
        email: user.email,
        uid: user.uid,
      }));
  
      console.log("User logged in:", user);
      // Redirect to profile page
      window.location.href = 'home.html';  // Redirect to profile page
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  
