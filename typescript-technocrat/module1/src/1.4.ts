// Basic Data Type

// string

let firstName: string = "John";

// number
let age: number = 30;

// boolean
let isEmployed: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let z: number;

z = 10;
// z = "10"; // Error: Type 'string' is not assignable to type 'number'.
// z = true; // Error: Type 'boolean' is not assignable to type 'number'.

// Array

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Doe"];

// tuple

let person: [string, number] = ["John", 30];

person[0] = "Jane"; // OK