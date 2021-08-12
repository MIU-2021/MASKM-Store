import {_postKarimApi} from "./api.services";

export const RegisterHandler = (data) => {
    return _postKarimApi(`register`,data)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};