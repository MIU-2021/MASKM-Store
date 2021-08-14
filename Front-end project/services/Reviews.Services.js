import {_post, _get, _delete, _put} from './api.services'




export const fecthAllReviewsByProduct = (id) => {
    return _get(`products/${id}/reviews`)
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

export const getAllReviewsForAdmin = () => {
    return _get(`admin/reviews`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const ApproveReview = (reviewid) => {
    return _get(`admin/reviews/${reviewid}?approved=true`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};
