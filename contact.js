document.getElementById("application-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var resume = document.getElementById("resume").value;
  
    // Create a FormData object and append the form data
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
  
    // Send the data to the Discord webhook URL
    var webhookUrl = "https://discord.com/api/webhooks/1114408205498449960/vdoo1xPa6zhyPhvE-7q33bxLtRd6XHNAIH1QDq-l-2w8s8Az8GZREp5GdgXPSsk4QCJP";
    const data = {
        'content': `New Contact:\n\Name: ${name}\nEmail: ${email}\nQuestion/Wondering: ${resume}\n NA `
    };

    fetch('https://discord.com/api/webhooks/1114408205498449960/vdoo1xPa6zhyPhvE-7q33bxLtRd6XHNAIH1QDq-l-2w8s8Az8GZREp5GdgXPSsk4QCJP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Your Application has been sent!');
            application-formData.reset();
        } else {
            alert('There was a problem sending your request. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your request. Please try again later.');
    });
});
function BACK(){
    window.location.replace('index.HTML');
}
  