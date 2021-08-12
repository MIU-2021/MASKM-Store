
import { _get, _post } from './api.services'


export const changePassword = (userId) => {
    console.log("It will implemented in future version. UserId", userId);
}

export const LoginService = (username, password) => {
    console.log(username, password);
  return  _post('auth', {
    username: username,
        password: password
    })
        .then(resp => {
            console.log(resp);
            localStorage.setItem("token", resp.jwt);
            localStorage.setItem("username", username);
        }).catch(err => console.log(err));


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

export const CurrentUser = () => {
    //const userName = localStorage.getItem('username');
    const userName ='ahmed';
    return _get('buyer/profile/' + userName)
        .then(response => {
            return response;
        })
        .catch(err => console.log(err));

    // return {
    //     user: {
    //         uid: "1",
    //         username: "miltonfre",
    //         password: "dfsdf",
    //         fName: "Milton",
    //         lName: "Gonzalez",
    //         phone: {
    //             countryCode: "1",
    //             areaCode: "465",
    //             number: "895 23 56",
    //         },
    //         email: "miltonfre@gmail.com",
    //         shippingAddress: {
    //             id: "1",
    //             country: "USA",
    //             city: "Fairfield",
    //             state: "IO",
    //             addressLine: "1000 N 4th street",
    //             zipCode: "52557",
    //             addressType: "shipping"
    //         },
    //         billingAddress: {
    //             id: "1",
    //             country: "USA",
    //             city: "Otumwa",
    //             state: "IO",
    //             addressLine: "300 river wath",
    //             zipCode: "54886",
    //             addressType: "billing"
    //         },
    //     },
    //     points: 0,
    //     orders: [
    //         {
    //             id: "#125021",
    //             productDetails: "Neck Velvet Dress",
    //             date: "02-15-2021",
    //             status: "Shipped",
    //             price: "$205",
    //         },
    //         {
    //             id: "#521214",
    //             productDetails: "Belted Trench Coat",
    //             date: "03-06-2021",
    //             status: "Shipped",
    //             price: "$350",
    //         },
    //         {
    //             id: "#521021",
    //             productDetails: "Men Print Tee",
    //             date: "04-12-2021",
    //             status: "pending",
    //             price: "$150",
    //         },
    //         {
    //             id: "#245021",
    //             productDetails: "Woman Print Tee",
    //             date: "05-21-2021",
    //             status: "Shipped",
    //             price: "$150",
    //         },
    //         {
    //             id: "#122141",
    //             productDetails: "Men Print Tee",
    //             date: "05-28-2021",
    //             status: "canceled",
    //             price: "$150",
    //         },
    //         {
    //             id: "#125015",
    //             productDetails: "Men Print Tee",
    //             date: "02-14-2021",
    //             status: "pending",
    //             price: "$150",
    //         },
    //         {
    //             id: "#245021",
    //             productDetails: "women print tee",
    //             date: "02-02-2021",
    //             status: "Shipped",
    //             price: "$150",
    //         },
    //         {
    //             id: "#122141",
    //             productDetails: "men print tee",
    //             date: "08-15-2021",
    //             status: "canceled",
    //             price: "$150",
    //         },
    //         {
    //             id: "#125015",
    //             productDetails: "men print tee",
    //             date: "03-15-2021",
    //             status: "pending",
    //             price: "$150",
    //         },
    //     ],
    //     paymentMethods: [],
    //     sellersFollowed: [],
    //     bid: 1
    // }
}


export const myFollows = () => {
    console.log('myFollows');
    return [{
        id: "1",
        fName: "Amazon",
        lName: ""
    }, {
        id: "2",
        fName: "Google",
        lName: ""
    }, {
        id: "3",
        fName: "Nike",
        lName: "Gonzalez"
    }, {
        id: "4",
        fName: "Adidas",
        lName: ""
    }
    ]


}