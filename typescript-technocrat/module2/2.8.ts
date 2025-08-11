{
    // promise

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const data = await response.json();
        // console.log(data);
        return data;
    };
    

    getTodo();





//*********************************** */



type Something = {
        something: string;
    };


    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "Hello, World!" };
            if (data) {
                resolve(data);
            } else {
                reject("No data found");
            }
        });
    };

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
        // console.log(`Data received: ${data}`);
    };

    showData();
}
