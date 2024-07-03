console.log(`Hello Ts`);

// Topics

// Union Type
// Interference
// Interference vs Type Aliases
// Enums
// Generic
// Tuples
// Type Guard











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












// Enums






















// Generic


















// // Tuples

// type fruits = [string , number];
// let fruit: fruits = [`mango` , 2]

// let ourTuples : [number , boolean , string];
// ourTuples = [12 , true , `hamza`];











// // Type Guard

// function hello(str) {
//     if (typeof (str) == `string`) {
//         console.log(str.toLowerCase());
        
//     }
// }

// hello()
// hello(`ishdgdhag`)
// hello(12333)