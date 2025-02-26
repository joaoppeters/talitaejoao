document.addEventListener('DOMContentLoaded', function() {
    // Calculate the Unix timestamp for 23/August/2025
    const targetDate = new Date('2025-08-23T16:00:00-03:00'); // UTC-3 time
    const targetTimestamp = Math.floor(targetDate.getTime() / 1000);
  
    // Ensure FlipDown container exists
    const flipdownContainer = document.getElementById('flipdown');
    if (!flipdownContainer) {
      console.error('FlipDown container not found!');
      return;
    }
  
    // Initialize FlipDown only when the DOM is fully loaded
    const flipdown = new FlipDown(targetTimestamp, {
      theme: 'dark', // Use 'dark' theme
      headings: ['Dias', 'Horas', 'Minutos', 'Segundos'], // Custom headings
    });
  
    // Start the countdown
    flipdown.start();
  
    // Display a custom message when the countdown ends
    flipdown.ifEnded(() => {
      document.getElementById('message').innerText = 'The event has started!';
    });
  });
  