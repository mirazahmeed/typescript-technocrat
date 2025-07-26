{
    // type Alias

    type Student = {
        name: string;
        age: number;
        contactNo: string;
        address: string;
        gender?: string; // optional property
    };

    const student1: Student = {
        name: "Alice",
        age: 20,
        contactNo: "123-456-7890",
        address: "123 Main St",
        gender: "male"
    }
    const student2: Student = {
        name: "Alize",
        age: 22,
        contactNo: "987-654-3210",
        address: "456 Elm St",
        gender : "male"
    }
    const student3: Student = {
        name: "Alize",
        age: 22,
        contactNo: "987-654-3210",
        address: "456 Elm St",
    }

    type UserName = string;
    type UserAge = number;
    const userName: UserName = "John Doe";
    const userAge: UserAge = 30;
    const isAdmin: boolean = true;

    type add =(num1: number, num2: number) => number;
    const add: add = (num1, num2) => num1 + num2;



















// 1.9.ts
}