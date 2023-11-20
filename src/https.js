export async function getPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Failed to load places");
    }

    return data;
}