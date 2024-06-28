console.log(`Hello Ts`);

// Topics

// Union Type
// Interference
// Interference vs Type Aliases
// Enums
// 











// // Union Type

// type User = string|number

// let username: User = `hamza`;
// let username: User = 1;
// let username: User = true;  //error

























// // Type Aliases

// type obj = {
//     firstname: string;
//     age: number;
// }

// let user:obj ={
//     firstname: `hamza`,
//     age: 18,
// }






// // Interference

// interface obj {
//     firstname: string;
//     age: 18;
// }

// let user:obj = {
//     firstname: `hamza`,
//     age: 18,
// }












// // Interfaces vs Type Aliases

// type obj = {
//     firstname: string;
//     age: 18;
// }
// type obj = {  //Its causes error in type bcz of wrong syntax it works on interface
//     lastname: string;
// }




// interface obj {
//     firstname: string;
//     age: 18;
// }
// interface obj {
//     lastname: string;
// }




