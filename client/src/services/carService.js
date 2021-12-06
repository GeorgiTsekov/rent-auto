const baseUrl = 'http://localhost:5000/mobile/car';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/all`);

    let cars = response.json();

    return cars;
}