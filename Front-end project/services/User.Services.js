
import { _post } from './api.services'


export const changePassword = (userId) => {
    console.log("It will implemented in future version. UserId", userId);
}

export const login = (username, password) => {
    console.log(username, password);
    _post('auth', {
        user: username,
        password: password
    });
    localStorage.setItem("token", username);

    // .then(user => {
    //     console.log(user);
    //     // localStorage.setItem("fullName", user.fullname);
    //     // localStorage.setItem("roleName", user.rolename);
    //     // localStorage.setItem("token", user.token.token);
    // })
    // .catch(err => console.log(err));
};

export const logout = () => {
    localStorage.removeItem("token");
}
export const register = (user) => {
    _post('register', user)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err));
};

export const CurrentUser = (userName) => {
    return {
        id: "1",
        username: "miltonfre",
        password: "dfsdf",
        fName: "Milton",
        lName: "Gonzalez",
        phone:{
            countryCode: "1",
            areaCode: "465",
            number: "895 23 56",
        },
        email: "miltonfre@gmail.com",
        shippingAddress: {
            id: "1",
            country: "USA",
            city: "Fairfield",
            state: "IO",
            addressLine: "1000 N 4th street",
            zipCode: "52557",
            addressType: "shipping"
        },
        billingAddress: {
            id: "1",
            country: "USA",
            city: "Otumwa",
            state: "IO",
            addressLine: "300 river wath",
            zipCode: "54886",
            addressType: "billing"
        },

    }
}


export const myFollows = () => {
    console.log('myFollows');
    return [{
        id: "1",
        fName: "Amazon",
        lName: ""
    } ,    {
        id: "2",
        fName: "Google",
        lName: ""
    } ,{
        id: "3",
        fName: "Nike",
        lName: "Gonzalez"
    } ,{
        id: "4",
        fName: "Adidas",
        lName: ""
    } 
]       

   
}