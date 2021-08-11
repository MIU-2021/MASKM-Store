
import { _post, _get, _delete, _put } from './api.services'




export const fecthAllProducts = () => {
    return _get('products/')
        .then(response => {
            return response;
        })
       // .catch(err => { return new (err) });
};
