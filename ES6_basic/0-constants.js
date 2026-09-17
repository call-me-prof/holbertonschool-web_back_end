// Uses const for a value that never changes
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

// Uses let because the value is reassigned
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
