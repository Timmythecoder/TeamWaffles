setTimeout(function() {
    location.reload();
  }, 1200000);
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
function BACK(){
    window.location.replace('index.HTML');
}
  