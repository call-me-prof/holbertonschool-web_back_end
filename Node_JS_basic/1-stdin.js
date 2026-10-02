// Ask the user for their name through STDIN
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Print the name as soon as it is received
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Print the closing message when the input ends
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
