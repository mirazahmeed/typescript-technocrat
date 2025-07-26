
{
    //union type
    // type FrontendDeveloper = "ZeroDeveloper" | "JuniorDeveloper" | "SeniorDeveloper";
    // type BackendDeveloper = "JuniorDeveloper" | "SeniorDeveloper" | "LeadDeveloper";

    // type Developer = FrontendDeveloper | BackendDeveloper;

    // const frontendDev: FrontendDeveloper = "SeniorDeveloper";
    // const backendDev: BackendDeveloper = "LeadDeveloper";


    // type User={
    //     name: string;
    //     age: number;
    //     role: FrontendDeveloper | BackendDeveloper;
    //     gender: "male"| "female" | "other";
    //     email: string;
    //     phone?: string;

    // }



    type FrontendDeveloper = {
        skills: string[];
        role1: "FrontendDeveloper";
    }
    type BackendDeveloper = {
        skills: string[];
        role2: "BackendDeveloper";
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper : FullStackDeveloper = {
        skills: ["HTML", "CSS", "JavaScript", "Node.js"],
        role1: "FrontendDeveloper",
        role2: "BackendDeveloper"
    };







    
} 