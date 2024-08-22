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

//use next time
//function updateScrollingText(message, backgroundColor = '#ffcc00') {
   // const scrollingTextElement = document.getElementById('scrolling-text');
  //  scrollingTextElement.textContent = message;
  //  scrollingTextElement.parentElement.style.backgroundColor = backgroundColor;

    // Reset animation
   // scrollingTextElement.style.animation = 'none';
   // setTimeout(() => {
        //scrollingTextElement.style.animation = '';
//    }, 10); // Small delay to re-trigger the animation
//}

// Example usage
//updateScrollingText('Welcome to Team Waffles Interface!', '#ffcc00');

// Change the announcement after 10 seconds
//setTimeout(() => {
    //updateScrollingText('New feature available: Customizable icons!', '#ff6699');
//}, 10000);


function updateNewsTicker(news) {
    const newsTickerElement = document.getElementById('news-ticker-text');
    newsTickerElement.textContent = `Latest News: ${news}`;
}

// Example usage:
updateNewsTicker('Team Waffles has BADGES on your Team Waffles Account!'), ('yeehaw')






window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
});
