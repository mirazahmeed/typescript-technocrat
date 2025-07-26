{
    // Nullable types
    const searchName = (name: string) => {
        if (name) {
            // console.log("Searching for:", name);
        } else {
            // console.log("Name is required");
        }
    };
    searchName("John Doe");

    const getSpeedInMetersPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const speed = (value * 1000) / 3600;
            console.log("Speed in m/s:", speed);
        }
        else if (typeof value === "string") {
        const [number, unit] = value.split(" ");
        const speed = ( parseFloat(number) * 1000) / 3600;
            console.log("Speed in m/s:", speed);
            
        }
        else {
            console.log("Invalid input type. Please provide a number or a string in the format 'number unit'.");
        }
    };

    // getSpeedInMetersPerSecond(1000);
    // getSpeedInMetersPerSecond(`1000 kmh^-1`);
    // getSpeedInMetersPerSecond(null);

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError("This is an error message");
}
