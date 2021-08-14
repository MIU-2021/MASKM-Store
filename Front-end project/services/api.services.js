import axios from "axios";
//const url = process.env.SERVER_API_URL;
const urlAhmed = 'http://172.19.140.140:2021';//ahmed
const urlsofiene = 'http://172.19.140.171:2021';//souphiane
//const url = 'https://fakestoreapi.com';
const url = 'http://172.19.140.95:2021'
//const url = 'https://fakestoreapi.com';


const headers = {
    'Content-Type': 'application/json'
}

export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
}

export const _get = (path) => {
    console.log(`${url}/${path}`);
    const token = localStorage.getItem("token");
    if (token && token != undefined) {
        headers.Authorization = `Bearer ${token}`;
    }
    console.log(`${url}/${path}`, headers);
    return axios
        .get(`${url}/${path}`, {
            headers: headers
        })
        //.get(`${url}/${path}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
}

export const _post = (path, body) => {
    const token = localStorage.getItem("token");
    console.log(`${url}/${path}`, body);
    if (token && token != undefined) {
        headers.Authorization = `Bearer ${token}`;
    }
    console.log(`${url}/${path}`, body, headers);
    return axios
        .post(`${url}/${path}`, body, {
            headers: headers
        })
        .then(response => {
            console.log(response);
            return response.data;
        }
        )
}

export const _put = (path, body) => {

    const token = localStorage.getItem("token");
    if (token && token != undefined) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axios
        .put(`${url}/${path}`, body, {
            headers: headers
        })
        .then(response => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
}


export const _delete = (path) => {
    const token = localStorage.getItem("token");
    if (token && token != undefined) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axios
        .delete(`${url}/${path}`, {
            headers: headers
        })
        .then(response => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
}


const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
