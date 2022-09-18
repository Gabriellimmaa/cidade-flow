const axios = require("axios");
const md5 = require("md5");

var url;
if (process.env.NODE_ENV === "production") {
    url = "http://18.228.170.164:8082/";
} else {
    url = "http://18.228.170.164:8082/";
}

function hashPassword(username, password) {
    var first = username.toLowerCase().replace(/( )+/g, "");
    var second = password.replace(/( )+/g, "");
    return md5(first + second + "login");
}

function parseLoginResponse(name, string) {
    return string.split(/\r?\n/).reduce((acc, line) => {
        var args = line.split("=");
        if (args[0] == "answer") {
            acc.answer = args[1];
        }

        if (args[0] == "token") {
            acc.token = args[1];
        }

        if (args[0].startsWith("name")) {
            acc.characters.push({
                name: args[1]
            })
        }

        if (args[0].startsWith("sex")) {
            acc.characters[acc.characters.length - 1].sex = args[1]
        }

        return acc;
    }, {
        answer: "fail",
        token: null,
        characters: [],
        name: name,
        isSuccessfull: function() { return this.answer == "ok"; }
    });
}

exports.signUp = function (username, password, captchaToken) {
    return new Promise(function (resolved, rejected) {
        axios
            .post(url + "signup", {
                username: username.toLowerCase(),
                passwordHash: hashPassword(username, password),
                captchaToken: captchaToken
            })
            .then(r => {
                if (r.data == "ok") {
                    resolved({
                        answer: "ok",
                        name: username,
                        characters: []
                    });
                } else {
                    rejected(r.data);
                }
            })
            .catch(e => rejected(e));
    });
};

exports.login = function (username, password, captchaToken) {
    return new Promise(function (resolved, rejected) {
        axios
            .post(url + "login", {
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

exports.changePassword = function (user, oldPassword, newPassword) {
    return new Promise((resolved, rejected) => {
        axios
            .post(url + "changepassword", {
                token: user.token,
                passwordHash: hashPassword(user.name.toLowerCase(), oldPassword),
                newPasswordHash: hashPassword(user.name.toLowerCase(), newPassword)
            })
            .then(r => r.data == "ok" ? resolved() : rejected(r.data))
            .catch(e => rejected(e));
    });
};

exports.forgotPassword = function (user, captchaToken) {
    return new Promise((resolved, rejected) => {
        axios
            .post(url + "forgotpassword", { username: user.toLowerCase(), captchaToken: captchaToken })
            .then(r => r.data == "ok" ? resolved() : rejected(r.data))
            .catch(e => rejected(e));
    });
};

exports.delete = function (user, password) {
    return new Promise(function (resolved, rejected) {
        axios
            .post(url + "delete", {
                token: user.token,
                passwordHash: hashPassword(user.name.toLowerCase(), password)
            })
            .then(r => {
                r.data == "ok" ? resolved() : rejected(r.data);
            })
            .catch(e => {
                rejected(e);
            });
    });
};
