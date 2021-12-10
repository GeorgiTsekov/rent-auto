const baseUrl = 'http://localhost:5000/auth';

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const register = async (name, email, password, rePassword) => {
    let response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, rePassword })
    });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

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