
import {_post, _get, _delete, _put, _postKarimApi} from './api.services'




export const fecthAllProducts = () => {
    return _get('products')
        .then(response => {
            return response;
        })
       // .catch(err => { return new (err) });
};

export const fecthProductByID = (id) => {
    return _get('products/'+id)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const fecthProductByCategory = (categoryId) => {
    return _get('products/category/'+categoryId)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};


export const AddProductForSeller = (username ,categoryId , data) => {
    return _postKarimApi('seller/'+username+'?cat='+categoryId,data)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};