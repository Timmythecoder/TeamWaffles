document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { src: "images/gallery/TWL O - Copy copy.png", description: "the good ol' Team Waffles Logo - thanks designer" },

        { src: "images/gallery/playfightingthing.png", description: "Gee I don't condone this. I awarded 50 Points to Ben and Alex 18/08/24" },
        { src: "images/gallery/playfightingthing1.png", description: "Gee I don't condone this. I awarded 50 Points to Ben and Alex 18/08/24" },

        { src: "images/gallery/mm2.png", description: "MM2 with Tim, Max, Alex, Ben and Matthew 18/08/24" },
        { src: "images/gallery/mm21.png", description: "MM2 with Tim, Max, Alex, Ben and Matthew 18/08/24" },

        { src: "images/gallery/ftfsc1.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc2.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc3.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc4.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc5.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc6.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc7.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc8.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc9.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc10.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc11.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc12.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },
        { src: "images/gallery/ftfsc13.png", description: "Flee The Facility with Max, Tim, Alex, Matthew, Ben, and Scarlett 18/08/24" },


        
        { src: "images/gallery/ftf.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf1.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf2.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf3.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf4.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf5.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf6.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf7.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf8.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf9.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf10.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        { src: "images/gallery/ftf11.png", description: "Flee The Facility with Max, Tim, and Alex 17/08/24" },
        // Add more photos as needed
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.description;
        img.className = 'gallery-image'; // Optional for styling

        // Add event listener for modal functionality
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });

        const description = document.createElement('div');
        description.className = 'description';
        description.innerText = photo.description;

        galleryItem.appendChild(img);
        galleryItem.appendChild(description);

        galleryContainer.appendChild(galleryItem);
    });

    // Close the modal when the user clicks on the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of the modal image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


function navigateTo(page) {
    window.location.href = page;
}
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;

    const timeString = hours + ':' + minutesStr + ' ' + ampm;
    document.getElementById('current-time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000); // Update every second

window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
});
