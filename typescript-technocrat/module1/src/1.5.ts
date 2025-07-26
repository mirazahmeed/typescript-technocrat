// reference type --> object

const user: {
    readonly company: string,
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
    } = {
    company: "TechCorp",
    firstName: "John",
    // middleName: "Doe",
    lastName: "Smith",
    isMarried: true,
    };

// user.company = "NewTech"; // Error: Cannot assign to 'company' because it is a read-only property.