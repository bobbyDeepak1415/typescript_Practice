// interface UserDetailsTypes {
//   name: string;
//   id: number;
//   age: any;
//   active: boolean;
//   greet(me: string): void;
//   habits: any[];
// }

// const User: UserDetailsTypes = {
//   name: "Bobby",
//   id: 12,
//   age: 30,
//   active: true,
//   greet(message) {
//     console.log(message + "!");
//   },
//   habits: ["hello", 12, false],
// };

// console.log(User.habits);

// type IdForDisplay=string | number |boolean

// function display(id:IdForDisplay){
//    return id
// }

// const result=display(false)
// console.log(result)

// interface UserCredentials {
//   id: number;
//   active: true;
//   creditCard: string;
// }

// interface UserPersonalDetails {
//   name: string;
//   age: 30;
// }

// type UserDetails = UserCredentials & UserPersonalDetails;

// const display = (employee: UserDetails) => {
//   return `${employee.name} with the id:${employee.id} is ${employee.age} years old and his status is ${employee.active} and is ${employee.creditCard} for credit card`;
// };

// const result = display({
//   id: 12,
//   active: true,
//   creditCard: "eligible",
//   name: "Bobby",
//   age: 30,
// });
// console.log(result);

// enum ErrorType {
//   Unauthorized = "unAuthorized",
//   NoUser = "noUser",
//   WrongCredentials = "wrongCredentials",
//   Internal = "internal",
// }

// const PrintErrorMsg = (error: ErrorType) => {
//   if (error == ErrorType.Internal) {
//     console.log("internal error");
//   } else if (error == ErrorType.NoUser) {
//     console.log("no user");
//   } else if (error == ErrorType.WrongCredentials) {
//     console.log("wrong credentials");
//   } else if (error == ErrorType.Unauthorized) {
//     console.log("unauthorised");
//   }
// };

// PrintErrorMsg(ErrorType.NoUser)

// interface EmployeeDetails {
//   readonly employeeId: number;
//   readonly startDate: Date;
//   name: string;
//   department: string;
// }

// const employee: EmployeeDetails = {
//   employeeId: 123,
//   startDate: new Date(),

//   name: "Bobby",
//   department: "Frontend",
// };

// employee.employeeId=3490
// employee.startDate=12/08/96
// console.log(employee)
