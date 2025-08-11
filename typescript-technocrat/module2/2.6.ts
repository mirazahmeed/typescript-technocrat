{
    // Constraints

    const addCourseToStudent = <P>(student: P) => {
        const course = "nested TypeScript";
        return {
            course,
            ...student,
        };
    };

    const student = addCourseToStudent({ name: "Alize", age: 25 });

    // console.log(student); // Output: { name: 'Alize', age: 25, course: 'nested TypeScript' }

    const getStudentDetails = <T extends {name :string, id : number, email: string}>(student: T) => {
        const course = "next.js";
        return {
            ...student,
            course,
        };
    };

    const student2 = getStudentDetails<{
        id: number;
        email: string;
        name: string;
        age: number;
        address: {
            city: string;
            country: string;
        };
    }>({
        id: 111,
        email: "khushbu@gmail.com",
        name: "Khushbu",
        age: 22,
        address: {
            city: "Dhaka",
            country: "Bangladesh",
        },
    });

    // console.log(student2); // Output: { id: 111, email: '


    const student3 = getStudentDetails({
        email: "alize@gmail.com",
        name: "Alize",
        id: 222,
        age: 24,
    });

    console.log(student3); // Output: { id: 222, email: '
    
}
