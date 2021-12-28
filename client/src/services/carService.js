import *as request from './requester';

const baseUrl = 'http://localhost:5000/mobile/car';

export const getAll = () => request.get(`${baseUrl}/all`);

export const getMySavedTrips = () => request.get(`${baseUrl}/mySavedTrips`);

export const available = async (carData) => request.post(`${baseUrl}/available`, carData);

export const getOne = async (carId) => request.get(`${baseUrl}/${carId}`);

export const create = async (carData) => request.post(`${baseUrl}/create`, carData);

export const likes = async (carId) => request.patch(`${baseUrl}/${carId}/like`);

export const rent = async (carData, carId) => request.patch(`${baseUrl}/${carId}/addTenant`, carData);

export const edit = async (carData, carId) => request.patch(`${baseUrl}/${carId}/edit`, carData);

export const deleteCar = async (carId) => request.deleteCar(`${baseUrl}/${carId}/delete`);
 