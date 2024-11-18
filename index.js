var firebaseConfig = {
  apiKey: "AIzaSyByaevOxIQWoQmJB7uDkY62THm-hKsvoYo",
  authDomain: "login-b8327.firebaseapp.com",
  databaseURL: "https://chat-6137d-default-rtdb.firebaseio.com",
  projectId: "login-b8327",
  storageBucket: "login-b8327.firebasestorage.app",
  messagingSenderId: "323620041883",
  appId: "1:323620041883:web:55941210d4afc145dd423e",
  measurementId: "G-FL1QW2F1PN"
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

