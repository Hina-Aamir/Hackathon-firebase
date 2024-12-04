import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";





import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import {
	// database
	getFirestore,
	collection,
	addDoc,
	getDocs,
	getDoc,
	doc,
	setDoc,
	
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import {
	// authenticaion
	createUserWithEmailAndPassword,

	// manage users
	signOut,
	updateProfile,
	deleteUser,
	// state tracking
	onAuthStateChanged,
	// email verificaition
	sendEmailVerification,

	reauthenticateWithCredential,
	
	
EmailAuthProvider,
	// google
	
	GoogleAuthProvider,
	signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';


const firebaseConfig = {
        apiKey: "AIzaSyBOzG8mfMsGRvqXw_q5NuzwhLJkHsqNltU",
        authDomain: "hina-4a51e.firebaseapp.com",
        projectId: "hina-4a51e",
        storageBucket: "hina-4a51e.firebasestorage.app",
        messagingSenderId: "561721511933",
        appId: "1:561721511933:web:e34cdda7269139e9b11394",
        measurementId: "G-1L7FLPQRXR"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



// google 
const provider = new GoogleAuthProvider();

export {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	updateProfile,
	deleteUser,

	// signin
	signInWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	GoogleAuthProvider,
	signInWithPopup,
	getFirestore,
	collection,
	addDoc,
	db,
	getDocs,
	getDoc,
	doc,
	setDoc,
	// google
	auth,
	provider,
	reauthenticateWithCredential,

	EmailAuthProvider,
};