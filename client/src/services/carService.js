const baseUrl = 'http://localhost:5000/mobile/car';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/all`);

    let cars = response.json();

    return cars;
}

export const getOne = (carId) => {
    return fetch(`${baseUrl}/${carId}`)
        .then(res => res.json());
}

export const create = async (carData) => {
    let response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    });

    let car = await response.json();

    console.log(car)

    return car;
}