{
    //Function with generic

    const createArray = (param: string): string[] => {
        return [param];
    };

    const res1 = createArray("Hello");

    // console.log(res1); // Output: ["Hello"]

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const res2 = createArrayWithGeneric<string>("Hello");

    // console.log(res2); // Output: ["Hello"]

    const res3 = createArrayWithGeneric<number>(42);

    type User = {
        name: string;
    };

    const resGenericObj = createArrayWithGeneric<User>({ name: "John" });

    // tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const res4 = createArrayWithTuple<string, number>("Hello", 42);
    const res5 = createArrayWithTuple<string, {year: string, month: string}>("Hello", { year: "2021", month: "October" });



    const addCourseToStudent = <T>(student : T) =>{
        const course = "TypeScript";
        return{
            ...student,
            course
        }
    }

    const student = addCourseToStudent({name:"Alize", age: 25});

    // console.log(student); // Output: { name: 'Alize', age: 25, course: 'TypeScript' }
    
    const student2 = addCourseToStudent({name : "Khushbu"})

    console.log(student2); // Output: { name: 'Khushbu', course: 'TypeScript'
    




}
