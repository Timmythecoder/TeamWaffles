
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Example function using Firebase database
function saveRequestToFirebase(songName) {
    const requestsRef = database.ref('songRequests');
    const newRequestRef = requestsRef.push();
    newRequestRef.set({
        songName: songName,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

// Usage example
const songName = 'Some Song Name';
saveRequestToFirebase(songName);
