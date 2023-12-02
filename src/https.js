//A library that does HTTPs requests as well, but with more possibilities is Tanstack Query
//npm i @tanstack/react-query
export async function getPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Failed to load places");
    }

    return data;
}

export async function updatePlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({
            places: places
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Failed to update places");
    }

    return data.message;
}
