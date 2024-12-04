// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// const auth = getAuth();
// let user=document.getElementById("signUpName");
// const  submit=document.getElementById("signupbtn");
// submit.addEventListener("click",function(){
//   let email= document.getElementById("signUpEmail");
// let password=document.getElementById("signUpPassword")

// event.preventDefault
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     console.log("successful signup")
//         alert("successful signup")
//      })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log("unsuccessful signup")
//     alert("unsuccessful signup")
//   });
// })

// above code is mine

// below code is miss provided

// Main JavaScript file

// Import necessary Firebase functions and variables
import {
	getAuth,
	createUserWithEmailAndPassword,
	// databsee
	db,
	setDoc,
	doc,
	onAuthStateChanged,
	auth,
	// provider,
	signInWithPopup,
	GoogleAuthProvider,
} from './firebase.js';


// User status tracking
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log('User is already signed in:', user);
	
	} else {
		console.log('No user signed in');
		if (!window.location.href == 'http://127.0.0.1:5501/signin.html') {
			console.log('hi');
			window.location.href = 'signin.html';
		}
	}
});
// Getting signup fields
let signupBtn = document.getElementById('signupbtn');
let signupEmail = document.getElementById('signUpEmail');
let signUpName = document.getElementById('signUpName');
let signupPassword = document.getElementById('signUpPassword');

// Loader functionality
let loader = document.getElementsByClassName('loader')[0];
const startLoader = () => {
	loader.style.display = 'block';
};

const endLoader = () => {
	loader.style.display = 'none';
};

signupBtn &&
	signupBtn.addEventListener('click', () => {
		let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(signupEmail.value.trim());
	

		if (email && signupPassword.value.trim() )
           
             {
			startLoader();

			createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
				.then(async (userCredential) => {
					Swal.fire({
						text: 'Your account has been created',
						icon: 'success',
					});
					const user = userCredential.user;
					let userObj = {
						address: signupAddress.value.trim(),
						phone: signupPhone.value.trim(),
						name: signUpName.value.trim(),
					};
					try {
						await setDoc(doc(db, 'users', user.uid), {
							...userObj,
						});
					} catch (e) {
						console.log(e);
					}

					endLoader();
					setTimeout(() => {
						window.location = 'login.html';
					}, 1500);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					endLoader();

					switch (errorCode.trim()) {
						case 'auth/weak-password':
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'Password length should be at least 6 characters',
							});
							break;
						case 'auth/email-already-in-use':
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'An account with this email already exists. Please try logging in or use a different email.',
							});
							break;
						default:
							console.log('Unknown error:', errorCode);
							Swal.fire({
								icon: 'error',
								title: 'Error',
								text: 'Something went wrong, please try again.',
							});
					}
				});
		} else {
			if (!email) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please enter a valid email address.',
				});
			} else if (!phoneNo) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Invalid phone number. Please enter a phone number with the correct format (e.g., +1 234-567-8901).',
				});
			} else {
				endLoader();
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please fill out all the required fields.',
				});
			}
		}
	});



// Exporting startLoader and endLoader

export { startLoader, endLoader };

