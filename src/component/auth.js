export const Auth = {
    isAuth: false,
    auth() {
        localStorage.setItem("isAuth",true);
    },
    logout() {
        localStorage.setItem("isAuth",false);
    }
}