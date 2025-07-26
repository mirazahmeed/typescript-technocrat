{
    //Introduction to generics

    type GenericArray<T> = Array<T>;

    // const rollNumbers:number[] = [1, 2, 3, 4, 5];
    const rollNumbers2: Array<number> = [1, 2, 3, 4, 5];

    // const mentors: string[] = ["Zero", "Alize", "Areeba", "Hassan"];
    const mentors2: Array<string> = ["Zero", "Alize", "Areeba", "Hassan"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray2: Array<boolean> = [true, false, true];


    // type User = {
    //     name: string;
    //     age: number;
    //     isActive: boolean;
    // }
    interface User {
        name: string;
        age: number;
        isActive: boolean;
    }

    const user: GenericArray< User > =
        [
            {
                name: "Zero",
                age: 25,
                isActive: true,
            },
            {
                name: "Alize",
                age: 24,
                isActive: false,
            },
            {
                name: "Areeba",
                age: 23,
                isActive: true,
            },
            {
                name: "Hassan",
                age: 26,
                isActive: false,
            },
        ];


    // genetic tuple

    type GenericTuple<T, U> = [T, U];

    const people : GenericTuple<string, string> = ["He", "She"]


    const UserWithID : GenericTuple<number, {name:string, age:number, isActive:boolean}> = [1234, {name:"Alize", age: 24, isActive: true}] 
}
