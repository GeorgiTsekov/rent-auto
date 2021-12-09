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

export const create = async (carData, token) => {
    let response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(carData)
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const likes = async (carId, token) => {
    let response = await fetch(`${baseUrl}/${carId}/like`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return await jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const deleteCar = async (carId, token) => {
    let response = await fetch(`${baseUrl}/${carId}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}