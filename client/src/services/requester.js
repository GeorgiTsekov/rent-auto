export const request = async (method, url, data) => {
    let result = null;

    if (method === 'GET') {
        result = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify()
        });
    } else {
        result = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        })
    }

    return result
        .then(responseHandler)
}

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return jsonData;
    } else {
        throw jsonData;
    }
}

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw userItem;
        }

        let user = JSON.parse(userItem)

        return user.accessToken;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCar = request.bind(null, 'DELETE');
export const get = request.bind(null, 'GET');
export const patch = request.bind(null, 'PATCH');
export const post = request.bind(null, 'POST');