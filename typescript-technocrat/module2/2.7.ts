{
    // Generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        bus: string;
    };

    type VehicleOwner = "bike" | "car" | "bus"; // "bike" | "car" | "bus"

    type VehicleKeys = keyof Vehicle; // "bike" | "car" | "bus"

    // function getPropertyValue(obj: object, key: string) {
    //     return obj[key];
    // }
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: "Alize",
        age: 25,
        vehicle: "bike",
    };
    const result = getPropertyValue(user, "vehicle");

    console.log(result);
}
