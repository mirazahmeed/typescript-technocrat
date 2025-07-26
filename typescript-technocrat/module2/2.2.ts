{

    //Interface, type vs interface
    type User1 = {
        name: string;
        age: number;
    };
    type RollNumber = number;

    type UserWithRole1 = User1 & { role: string };

    interface UserWithRole2 extends User1 {
        role: string;
    }

    const User1: UserWithRole2 = {
        name: "John",
        age: 30,
        role: "admin"
    };
    interface User2 {
        name: string;
        age: number;
    }

    type Roll1 = number[];

    interface Roll2 {
        [index : number]: number
    }
    const rollNumber1: Roll2 = [1, 2, 3];

    type Add = (num1: number, num2: number) => number;
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add = (num1,num2) => num1 + num2;





}
