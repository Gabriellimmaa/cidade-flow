import api from "./api";

export function api_forgotPassword(user: any, captchaToken: any) {
    return new Promise((resolved, rejected) => {
        api.post("forgotpassword", { username: user.toLowerCase(), captchaToken: captchaToken })
            .then(r => r.data == "ok" ? resolved : rejected(r.data))
            .catch(e => rejected(e));
    });
};