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
