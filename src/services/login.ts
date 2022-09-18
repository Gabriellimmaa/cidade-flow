import api from "./api";

export function login(username: any, password: any, captchaToken: any) {
    return new Promise(function (resolved, rejected) {
        api.post("login", {
                username: username.toLowerCase(),
                passwordHash: hashPassword(username, password),
                captchaToken: captchaToken
            })
            .then(r => {
				//console.log(r);
                var result = parseLoginResponse(username, r.data);
                if (result.isSuccessfull()) {
                    resolved(result);
                } else {
                    rejected(r.data);
                }
            })
            .catch(e => rejected(e));
    });
};