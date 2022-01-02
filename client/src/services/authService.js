import { BASE_URL } from "../constants";
import *as request from "./requester";

const baseUrl = `${BASE_URL}/auth`;

export const login = async (authData) => request.post(`${baseUrl}/login`, authData);

export const register = async (authData) => request.post(`${baseUrl}/register`, authData);

export const logout = async (token) => {
    let response = await fetch(`${baseUrl}/logout`, {
        headers: {
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

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
}

export const isAuthenticated = () => {
    return Boolean(getUser().email);
}