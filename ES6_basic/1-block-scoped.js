// Block-scoped variables inside the if block do not overwrite the outer ones
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars, no-shadow
    const task2 = false; // eslint-disable-line no-unused-vars, no-shadow
  }

  return [task, task2];
}
