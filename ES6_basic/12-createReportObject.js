// Returns a report with all employees and a method to count departments
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
