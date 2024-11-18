var firebaseConfig = {
  apiKey: "AIzaSyCR_wZAVK7Z6xFg7FyB6-NRravQczyEm-k",
  authDomain: "abcd-d6b82.firebaseapp.com",
  databaseURL: "https://abcd-d6b82-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "abcd-d6b82",
  storageBucket: "abcd-d6b82.firebasestorage.app",
  messagingSenderId: "781068846223",
  appId: "1:781068846223:web:087e3595872da34d315cfa",
  measurementId: "G-W3GDC5B7XS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("google-login").addEventListener("click", () => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      window.location = "chat.html"; // Redirect to chat page
    })
    .catch(error => {
      console.error("Error during sign-in:", error);
    });
});

