// destructuring and spread operator

{
    const user = {
        name: {
            firstName: "John",
            middleNme: "A.",
            lastName: "Doe",
        },
        age: 30,
        address: {
            city: "New York",
            country: "USA",
        },
        contactNo: "123-456-7890",
        hobbies: ["reading", "traveling", "coding"],
    };

    const {
        contactNo,
        name: { firstName, middleNme: MidName, lastName },
        address: { city, country },
    } = user;

    // Array destructuring

    const myFriends = ["Alice", "Bob", "Charlie", "David", "Eve"];

    const [, , bestFriend, ...rest] = myFriends;
    console.log(`Best friend: ${bestFriend}`); // Best friend: Charlie
    console.log(`Other friends: ${rest}`); // Other friends: David,Eve
}
