import {_delete, _get, _post} from "./api.services";

export const fetchProductsBySellerUsername = (username) => {
    return _get('products?userName='+username)

        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const deleteProductBySeller = (idproduct , sellerusername) => {
    return _delete(`seller/${sellerusername}/products/${idproduct}`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};