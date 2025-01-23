// Calculate the Unix timestamp for 23/August/2025
const targetDate = new Date('2025-08-23T00:00:00Z'); // UTC time
const targetTimestamp = Math.floor(targetDate.getTime() / 1000);

// Initialize FlipDown
new FlipDown(targetTimestamp, {
  theme: 'dark', // Use 'dark' theme
  headings: ['Days', 'Hours', 'Minutes', 'Seconds'], // Custom headings
})
  .start()
  .ifEnded(() => {
    // Display a custom message when the countdown ends
    document.getElementById('message').innerText = 'The event has started!';
  });