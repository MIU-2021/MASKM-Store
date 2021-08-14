import {_post} from "./api.services";

export const RegisterHandler = (data) => {
    
    return _post(`register`,data)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};