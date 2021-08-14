import {_delete, _get, _post} from "./api.services";
import {UserAuthenticated} from "./User.Services";

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

export const getSellerOrders = (sellerusername) => {
    return _get(`seller/${sellerusername}/orders`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const makeOrderShipped = (sellerusername , productid) => {
    return _post(`seller/${sellerusername}/order/shipped/${productid}`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};
export const makeOrderCanceled = (sellerusername , productid) => {
    return _post(`seller/${sellerusername}/order/cancel/${productid}`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const getSellerProfileData = (sellerusername) => {
    return _get(`seller/${sellerusername}`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};


export const getAllSellers = () => {
    return _get(`seller`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const ApproveSeller = (username) => {
    return _get(`admin/seller/${username}?approved=true`)
        .then(response => {
            return response;
        })
    // .catch(err => { return new (err) });
};

export const FollowSeller=(sellerUserName)=>{
    const userName = UserAuthenticated();
    return _post('buyer/' + userName+'/follow/'+sellerUserName)
        .then(response => {
            console.log(response);
            return response;
        });
}

export const UnFollowSeller=(sellerUserName)=>{
    const userName = UserAuthenticated();
    return _post('buyer/' + userName+'/unfollow/'+sellerUserName)
        .then(response => {
            console.log(response);
            return response;
        });
}

export const SellerbyProductId=(productId)=>{
    return _get('products/' + productId+'/seller')
        .then(response => {
            return response;
        });
}

export const FollowingSellers =()=>{
    const userName = UserAuthenticated();
    return _get('buyer/' + userName+'/follow')
    .then(response => {
        return response;
    });
}


