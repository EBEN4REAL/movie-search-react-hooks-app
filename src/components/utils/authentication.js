const Auth = {
    authenticate() {
        localStorage.setItem('authenticated', JSON.parse(true))
    },
    signout() {
        localStorage.setItem('authenticated', JSON.parse(false))
    },
    getAuth() {
        return JSON.parse(localStorage.getItem('userDetails')) ? JSON.parse(localStorage.getItem('userDetails')) : false;
    }
};

export default Auth;