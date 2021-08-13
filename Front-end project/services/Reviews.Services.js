import {_post, _get, _delete, _put} from './api.services'




export const fecthAllReviewsByProduct = (id) => {
    return _get('products/2/reviews')
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};


export const postReviewForproduct = (data, productid) => {
    return _post(`products/${productid}/reviews`,data)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};