setTimeout(function() {
    location.reload();
  }, 10000);
const form = document.getElementById('request-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const message = document.getElementById('message').value;

    const data = {
        'content': `New Song Request:\n\nTitle: ${title}\nArtist: ${artist}\nMessage: ${message}`
    };

    fetch('https://discord.com/api/webhooks/1099631197010800641/0-76iAHXdnz2YHzy6ZJlAcmhwSeI36QxFiK6AKgm5EAsFGylEqpI7e71mLNc7P5CEk1p', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Your song request has been sent!');
            form.reset();
        } else {
            alert('There was a problem sending your request. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your request. Please try again later.');
    });
});
const adminBtn = document.getElementById('admin-btn');
adminBtn.addEventListener('click', () => {
	window.location.href = 'login.html'; // replace with the URL of your admin login page
});

// Define an array of workers
const workers = [
	{
		name: "John Doe",
		job: "Developer",
		location: "New York, NY",
	},
	{
		name: "Jane Smith",
		job: "Designer",
		location: "San Francisco, CA",
	},
	{
		name: "Bob Johnson",
		job: "Project Manager",
		location: "Chicago, IL",
	}
];

// Get the workers list section
const workersList = document.querySelector("#workers-list ul");

// Add each worker to the list
workers.forEach(worker => {
	const li = document.createElement("li");
	li.innerHTML = `
		<h3>${worker.name}</h3>
		<p><strong>Job:</strong> ${worker.job}</p>
		<p><strong>Location:</strong> ${worker.location}</p>
	`;

});

// Get the application form
const applicationForm = document.querySelector("#application-form form");

// Add a listener for the form
// optional: hide the rules section by default
document.getElementById("rules").style.display = "none";

// show/hide the rules section when a button is clicked
document.getElementById("toggle-rules-btn").addEventListener("click", function() {
  var rulesSection = document.getElementById("rules");
  if (rulesSection.style.display === "none") {
    rulesSection.style.display = "block";
  } else {
    rulesSection.style.display = "none";
  }
});

