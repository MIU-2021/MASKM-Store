import {_post, _get, _delete, _put, _getApiKarim, _postKarimApi} from './api.services'




export const fecthAllReviewsByProduct = (id) => {
    return _getApiKarim('products/2/reviews')
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};


export const postReviewForproduct = (data, productid) => {
    return _postKarimApi(`products/${productid}/reviews`,data)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};