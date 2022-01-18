// Create an array of characters representing a full rotation of the spinner
let spinnerCharacters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
// Create an initial delay variable
let delay = 0;
// Print out each character after a delay
for (const char of spinnerCharacters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  // Iterate the delay by 200ms
  delay += 200;
}