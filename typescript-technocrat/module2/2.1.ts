{
    // type assertion

    const kgToGm = (value: string | number) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };

    const result1 = kgToGm(2.5) as number;
    const result2 = kgToGm("3005");

    type CustomError = {
        message: string;
    };
    try {
    } catch (error: unknown) {
        console.log((error as CustomError).message);
    }
}
