import React, { useEffect, useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import firebase from '../../../config/base'
import CheckoutPage from './common/checkout-page';
import Login from '../../page/account/login-auth'
import { RoleAuthenticated } from '../../../services/User.Services';

const Checkout = () => {

    useEffect(() => {
        if (!RoleAuthenticated() || RoleAuthenticated().toUpperCase() != 'BUYER')
            router.push("/page/account/login");
    })
    return (
        <>
            <CommonLayout parent="home" title="checkout">
                <CheckoutPage />
            </CommonLayout>

        </>
    )
}

export default Checkout;