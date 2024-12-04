// Elements
const editImgBtn = document.getElementById('edit-img');
const editInfoBtn = document.getElementById('edit-info');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const profileForm = document.getElementById('profile-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email-edit');
const bioField = document.getElementById('bio');

// Enable editing profile information
editInfoBtn.addEventListener('click', () => {
  nameField.disabled = false;
  emailField.disabled = false;
  bioField.disabled = false;
  
  saveBtn.disabled = false;
  cancelBtn.disabled = false;
  editInfoBtn.disabled = true;
});

// Cancel changes
cancelBtn.addEventListener('click', () => {
  nameField.disabled = true;
  emailField.disabled = true;
  bioField.disabled = true;
  
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  editInfoBtn.disabled = false;
});

// Save changes
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you could handle saving the data to a server or locally

  alert('Profile updated successfully!');
  
  // Disable fields again
  nameField.disabled = true;
  emailField.disabled = true;
  bioField.disabled = true;
  
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  editInfoBtn.disabled = false;
});
// profile.js

// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem("userData"));

// Check if the user is logged in by checking localStorage
if (!userData) {
  // Redirect to login page if no user data found
  window.location.href = 'login.html';
} else {
  // Dynamically populate the profile fields with the user data
  document.getElementById('userName').textContent = userData.username;
  document.getElementById('userEmail').textContent = userData.email;
  document.getElementById('userUid').textContent = `UID: ${userData.uid}`;
  document.getElementById('fullName').textContent = userData.username; // Optional: You can also split full name if needed
  document.getElementById('email').textContent = userData.email;
}

// Handle logout functionality
const logoutBtn = document.getElementById('logoutBtn');

