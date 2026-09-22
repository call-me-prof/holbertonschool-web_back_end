/**
 * Executes a function and records its result or error in a queue.
 * @param {Function} mathFunction - Function to execute.
 * @returns {Array}
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
