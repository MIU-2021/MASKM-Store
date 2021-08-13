
import { _get, _post } from './api.services'
import jwt_decode from 'jwt-decode';

export const changePassword = (userId) => {
    console.log("It will implemented in future version. UserId", userId);
}
export const UserAuthenticated = () => {
    const tokenUserName = localStorage.getItem("username");
    if (tokenUserName && tokenUserName != undefined) {
        return tokenUserName;
    }
    else return null;
}

export const RoleAuthenticated = () => {
    const tokenRole = localStorage.getItem("role");
    if (tokenRole && tokenRole != undefined) {
        return tokenRole;
    }
    else return null;
}
export const LoginService = (username, password) => {
    console.log(username, password);
    return _post('auth', {
        username: username,
        password: password
    })
        .then(resp => {
            console.log(resp);
            var decoded = jwt_decode(resp.jwt);
            localStorage.setItem("token", resp.jwt);
            localStorage.setItem("username", username);
            localStorage.setItem("role", decoded.role);
        })
};

export const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
}
export const register = (user) => {
    _post('register', user)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err));
};

export const CurrentUser = () => {
    const userName = UserAuthenticated();
    return _get('buyer/profile/' + userName)
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => console.log(err));    
}

export const UpdateUser = (user) => {
    const userName = UserAuthenticated();
    console.log('buyer/profile/' + userName+'/edit',user);
    return _post('buyer/profile/' + userName+'/edit',user)
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => console.log(err));    
}


