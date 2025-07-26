{
    const age: number = 30;

    // if (age >= 18) {
    //     console.log("You are an adult.");
    // } else {
    //     console.log("You are a minor.");
    // }

    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // console.log({isAdult});

    const isAuthenticated = undefined;

    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    // console.log({ result2 });
    // console.log({ result1 });

    type User = {
        name: string;
        age: number;
        address?: {
            street: string;
            city: string;
            country?: string;
            presentAddress?: string;
            permanentAddress?: string;
        };
        email: string;
        phone?: string;
    };

    const user: User = {
        name: "John Doe",
        age: 30,
        email: "one@gmail,com",
        address: {
            street: "123 Main St",
            city: "New York",
            country: "USA",
            presentAddress: "456 Elm St",
            permanentAddress: "789 Oak St"
        },
        phone: "123-456-7890",
    };


    const permanentAddress = user?.address?.permanentAddress ?? "No permanent address provided";
    console.log({ permanentAddress });





}
