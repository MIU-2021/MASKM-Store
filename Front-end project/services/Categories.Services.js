import { _post, _get, _delete, _put } from './api.services'




export const fecthAllCategories = () => {
    return _get('cats/')
        .then(response => {
            return response;
        })
       // .catch(err => { return new (err) });
};
