// Returns an object with the department name as key and employees as value
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
