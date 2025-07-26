{
    //spread operator
    //rest operator
    //destructuring

    //spread operator

    const bros1: string[] = ["John", "Doe", "Smith"];

    const bros2: string[] = ["Kim", "Lee", "Park"];

    bros1.push(...bros2);
    console.log(bros1); // ['John', 'Doe', 'Smith', 'Kim', 'Lee', 'Park']

    const mentors1: Record<string, string> = {
        typescript: "John",
        redux: "Doe",
        dbms: "Smith",
    };
    const mentors2: Record<string, string> = {
        prisma: "Kim",
        nextjs: "Lee",
        cloud: "Park",
    };

    const mentors = {
        ...mentors1,
        ...mentors2,
    };
    console.log(mentors); // { typescript: 'John', redux: 'Doe', dbms: 'Smith', prisma: 'Kim', nextjs: 'Lee', cloud: 'Park' }

    // rest operator

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hello ${friend1}, ${friend2}, and ${friend3}!`);
        friends.forEach((friend: string) => console.log(`Hello ${friend}!`));
    };

    greetFriends("Alice", "Bob", "Charlie");
}
