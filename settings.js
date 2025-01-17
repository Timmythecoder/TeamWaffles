// Firebase v8 Initialization
const firebaseConfig = {
    apiKey: "AIzaSyC8qeTBv9vgVlCMOQjFXPAGMkd7wHbKVe8",
    authDomain: "team-waffles-sys.firebaseapp.com",
    databaseURL: "https://team-waffles-sys-default-rtdb.firebaseio.com", // Realtime Database URL
    projectId: "team-waffles-sys",
    storageBucket: "team-waffles-sys.firebasestorage.app",
    messagingSenderId: "824743077785",
    appId: "1:824743077785:web:31f5c51d26b2088b71d508",
    measurementId: "G-D2G5DV44ZC"
};

// Initialize Firebase only if it isn't already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the existing instance if already initialized
}

// Access Firebase Realtime Database
const database = firebase.database();

// Get the toggle switch and the current theme from localStorage
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the theme from localStorage
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Event listener for theme toggle
themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        // Apply dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Apply light mode
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    // Sync preference with Firebase (if user is logged in)
    const userId = localStorage.getItem('username'); // Assume username is saved in localStorage
    if (userId) {
        // Update the theme in Firebase Realtime Database
        database.ref('users/' + userId).update({
            theme: e.target.checked ? 'dark' : 'light'
        }).then(() => {
            console.log('Theme preference updated in Firebase');
        }).catch(error => {
            console.error('Error updating theme in Firebase:', error);
        });
    }
});
