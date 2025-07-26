{
    // interface - Introduction to generics

    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            year: number;
        };
        smartWatch: T;
        bike?: Y;
    }

    type AppleSmartWatch = {
        brand: string;
        model: string;
        display: string;
    };

    const developer1: Developer<AppleSmartWatch> = {
        name: "Alize",
        computer: {
            brand: "Apple",
            model: "MacBook Pro",
            year: 2020,
        },
        smartWatch: {
            brand: "Apple Watch Series 6",
            model: "Series 6",
            display: "Always On",
        },
    };

    type SamsungSmartWatch = {
        brand: string;
        model: string;
        display: string;
        heartRateMonitor: boolean;
        sleepTracking: boolean;
    };

    interface Bike {
        brand: string;
        model: string;
    }

    const developer2: Developer<SamsungSmartWatch, Bike> = {
        name: "Hassan",
        computer: {
            brand: "Dell",
            model: "XPS 13",
            year: 2021,
        },
        smartWatch: {
            brand: "Samsung Galaxy Watch 3",
            model: "Galaxy Watch 3",
            display: "AMOLED",
            heartRateMonitor: true,
            sleepTracking: true,
        },
        bike: {
            brand: "Trek",
            model: "Domane SL 6",
        },
    };
    //
}
