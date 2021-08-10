import axios from "axios";
const url = process.env.SERVER_API_URL;



// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': localStorage.getItem("token")
// }

export const logout=()=>{
    // remove user from local storage to log user out
    localStorage.removeItem("token");
}

export const _get=(path) =>{
    return axios
        .get(`${url}/${path}`, {
            headers: headers
        })
        .then(response => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
}

export const _post=(path, body) =>{
    console.log(path, body);
    // return axios
    //     .post(`${url}/${path}`, body, {
    //         headers: headers
    //     })
    //     .then(response => {
    //         return response.data;
    //     }).catch((error) => {
    //         console.log(error);
    //     });
}

export const _put=(path, body)=> {
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


export const _delete=(path) =>{
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


const handleResponse=(response) =>{
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
