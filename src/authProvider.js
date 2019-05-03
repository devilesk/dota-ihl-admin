import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    console.log(type, localStorage.getItem('token'), params);
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(process.env.REACT_APP_AUTH_PROVIDER, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    console.log('innerError', response.statusText);
                    window.location = '/auth/login';
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                console.log('token', token);
                localStorage.setItem('token', token);
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        window.location = '/auth/logout';
        console.log('after logout');
        return Promise.resolve({ redirectTo: '/logout' });
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        const { route } = params;
        if (route === 'logout') return Promise.resolve();
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};