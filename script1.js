// Simple points system (local storage to simulate a database)
const loginForm = document.getElementById('loginForm');
const pointsContainer = document.getElementById('pointsContainer');
const userEmailDisplay = document.getElementById('userEmail');
const userPointsDisplay = document.getElementById('userPoints');
const addPointsBtn = document.getElementById('addPointsBtn');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulated successful login
    if (email && password) {
        alert(`Login successful! Welcome, ${email}`);
        loginForm.classList.add('hidden');
        pointsContainer.classList.remove('hidden');
        userEmailDisplay.textContent = email;

        // Check if user points exist in local storage
        let points = localStorage.getItem(email);
        if (!points) {
            points = 0; // Initialize if not found
            localStorage.setItem(email, points);
        }
        userPointsDisplay.textContent = points;
    } else {
        alert('Please fill in both fields.');
    }
});

addPointsBtn.addEventListener('click', function () {
    const email = userEmailDisplay.textContent;
    let points = parseInt(localStorage.getItem(email), 10);
    points += 10; // Add points
    localStorage.setItem(email, points);
    userPointsDisplay.textContent = points;
    alert(`10 points added! Your total points: ${points}`);
});
