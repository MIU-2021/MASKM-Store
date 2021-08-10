
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