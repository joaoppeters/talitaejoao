document.addEventListener('DOMContentLoaded', function() {
    // Calculate the Unix timestamp for 23/August/2025
    const targetDate = new Date('2025-08-23T00:00:00Z'); // UTC time
    const targetTimestamp = Math.floor(targetDate.getTime() / 1000);
  
    // Initialize FlipDown only when the DOM is fully loaded
    const flipdown = new FlipDown(targetTimestamp, {
      theme: 'dark', // Use 'dark' theme
      headings: ['Days', 'Hours', 'Minutes', 'Seconds'], // Custom headings
    });
  
    // Start the countdown
    flipdown.start();
  
    // Display a custom message when the countdown ends
    flipdown.ifEnded(() => {
      document.getElementById('message').innerText = 'The event has started!';
    });
  });