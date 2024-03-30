/*
Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

Create a Union Type: Define a type Staff that is a union of Employee and Manager.

Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
*/

type Employee = {id: number, name: string, department: string}
type Manager = {id:number, name: string, employees: Employee[]}

type Staff = Employee | Manager

function printStaffDetails(params:Staff) {
  'department' in params? console.log(`${params.name} is an employee in the ${params.department} department.`): console.log(`${params.name} is a manager of ${params.employees.length} employees.`)
}

/* // esto es de el repositiorio de jhon smilga

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
} */

let juanito: Employee = {id: 21, name: 'juan', department: 'marketing'}
let eduardo: Employee = {id: 23, name: 'eduardo', department: 'vago'}
let marcos: Manager = {id: 20, name: 'marcos', employees: [juanito, eduardo]}
printStaffDetails(marcos)
printStaffDetails(eduardo)
printStaffDetails(juanito)
