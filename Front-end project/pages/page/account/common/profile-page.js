import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { CurrentUser } from '../../../../services/User.Services';


const address={
    addressLine:'',
    country:'',
    state:'',
    city:'',
    zipCode:'',
}
const ProfilePage = (props) => {
   // const userProp = props.user;
    const [user, setUser] = useState({});
    const [shippingAddress, setShippingAddress] = useState({});
    const [billingAddress, setBillingAddress] = useState({});
    
    useEffect(() => {
        setUser(props.user);
    //    user.shippingAddress ? setShippingAddress(user.shippingAddress):setShippingAddress(address);
    //    user.billingAddress ?setBillingAddress( user.billingAddress):setBillingAddress(address);
     }, []);
     console.log(user);
    // console.log(shippingAddress);console.log(billingAddress);
    return (
        <>
           </>
    )
}

export default ProfilePage;