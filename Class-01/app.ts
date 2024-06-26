console.log(`Hello Typescript`);


// Topics

// Ts Compiler
// Type Annotation
// Type Interference
// Type Aliases















// // Ts Compiler

// // Command For Convert ts into js

// tsc app.ts
// tsc app.ts -w
















// // Type Annotation

// let username:string = `hamza`
// username = `usman`
// console.log(username);


// let age:number = 18;
// age = 12
// console.log(age);

// let isLoggedIn:boolean = true
// console.log(isLoggedIn);


// let user:string[] = [`hamza`]



// let username:any = `hamza`
// username = 18
// Any is wrong method never use any in ts 


// function sum(num1:number , num2:number):number {
//     return num1 + num2
// }
// console.log(sum(20 , 30));

// function greetUser(username:string , age:number):void {
//     console.log(`hello ${username} with age ${age}`);
    
// }
// greetUser(`hamza` , 18)




















// // Type Interference

// let username = `hamza`;
// username = 18; //Error
// By Default  type string hogae h


// let age = 18;
// age = `hamza`  //error
// By Default type number hogae h



// type User = {
//     username: string,
//     email: string,
//     age: number,
//     isLoggedIn: boolean,
//     lastname?: string,
// }

// const user:User = {
//     username: `hamza`,
//     email: `Hamzaabro@gmail.com`,
//     age: 18,
//     isLoggedIn: true,
// }
// user.lastname = `abro`

// console.log(user);





















// // Type Aliases

// type User = string
// let user:User = `hamza`

// type Fruits = (string | number)[]
// let fruits:Fruits = [`hamza` , 18]