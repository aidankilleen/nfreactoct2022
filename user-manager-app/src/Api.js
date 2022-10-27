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

export const addUser = async (userToAdd) => {
    const response = await fetch(url, {
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(userToAdd)
    });

    if (!response.ok) {
        throw new Error ("something went wrong in the addUser");
    }
    return response.json();
}

export const updateUser = async (userToUpdate) => {

    const response = await fetch(`${url}/${userToUpdate.id}`, {
        method: "put", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(userToUpdate)
    });

    if (!response.ok) {
        throw new Error ("something went wrong in the updateUser");
    }
    return response.json();
}

export const deleteUser = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "delete"
    });

    if (!response.ok) {
        throw new Error ("something went wrong with delete");
    }
    return response.json();
}