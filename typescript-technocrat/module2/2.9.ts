{
    // Conditional type to check if T is a string

    type a = string;
    type b = number;
    type c = null;

    type x = a extends string ? "yes" : "no";

    type y = b extends string ? "yes" : c extends string ? "yes" : "no";

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type VehicleCheck = CheckVehicle<"ship">;

    const vehicleCheck: VehicleCheck = true; // This should be true since "ship" is a key in Sheikh
    console.log(vehicleCheck); // Output: true
    
}
