export const url = "http://localhost:4000/users";

export const getAllUsers = async () => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Something went wrong with getAllUsers()");
    }
    return response.json();
}

export const getUser = async ({ queryKey }) => {

    const [, {id}] = queryKey;

//    params[0];
//    params[1] {id};
    const response = await fetch (`${url}/${id}`);

    if (!response.ok) {
        throw new Error ("Something went wrong in getUser()");
    }
    return response.json();
}